/**
 * Script para enviar notificaciones a Discord mediante Webhook
 * Compatible con Node.js 18+ (usa fetch nativo)
 */

async function sendDiscordNotification() {
  const webhookUrl = process.env.DISCORD_WEBHOOK;

  if (!webhookUrl) {
    console.warn('[AVISO] DISCORD_WEBHOOK no está configurado en las variables de entorno. Se omite el envío.');
    return;
  }

  const status = (process.env.PIPELINE_STATUS || 'SUCCESS').toUpperCase();
  const jobName = process.env.JOB_NAME || 'Pipeline-CI-Individual';
  const buildNumber = process.env.BUILD_NUMBER || '1';
  const buildUrl = process.env.BUILD_URL || 'http://localhost:8080';
  const gitBranch = process.env.GIT_BRANCH || 'main';

  const isSuccess = status === 'SUCCESS';

  const payload = {
    username: 'Jenkins CI Bot',
    avatar_url: 'https://www.jenkins.io/images/logos/jenkins/jenkins.png',
    embeds: [
      {
        title: isSuccess
          ? `✅ [EXITOSO] ${jobName} - Build #${buildNumber}`
          : `❌ [FALLIDO] ${jobName} - Build #${buildNumber}`,
        description: isSuccess
          ? 'Todas las etapas del pipeline se completaron satisfactoriamente. Integración y pruebas unitarias aprobadas.'
          : 'El pipeline ha fallado durante la compilación o la ejecución de pruebas unitarias.',
        color: isSuccess ? 0x2ecc71 : 0xe74c3c, // Verde : Rojo
        fields: [
          {
            name: '📌 Estado',
            value: isSuccess ? 'APROBADO (PASS)' : 'RECHAZADO (FAIL)',
            inline: true
          },
          {
            name: '🌿 Rama',
            value: gitBranch,
            inline: true
          },
          {
            name: '🔗 Enlace de Jenkins',
            value: `[Ver Ejecución #${buildNumber}](${buildUrl})`,
            inline: false
          }
        ],
        footer: {
          text: 'Procesos de Software - Automatización CI'
        },
        timestamp: new Date().toISOString()
      }
    ]
  };

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      console.log(`[OK] Notificación enviada exitosamente a Discord (${status}).`);
    } else {
      console.error(`[ERROR] Discord respondió con código ${response.status}: ${await response.text()}`);
    }
  } catch (err) {
    console.error('[ERROR] Error al enviar notificación a Discord:', err.message);
  }
}

sendDiscordNotification();
