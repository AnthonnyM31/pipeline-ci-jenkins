pipeline {
    agent any

    tools {
        // En Windows, se utiliza el Node.js instalado en el sistema (PATH)
    }

    environment {
        PROJECT_NAME = 'Pipeline-CI-Individual'
    }

    stages {
        stage('Integración al repo privado') {
            steps {
                echo '====================================================='
                echo 'ETAPA 1: INTEGRACIÓN AL REPOSITORIO PRIVADO'
                echo '====================================================='
                echo "Repositorio clonado e integrado correctamente."
                bat 'git status'
                bat 'git log -1 --pretty=format:"Último commit: %h - %s (%an)"'
            }
        }

        stage('Compilación y test automatizados') {
            steps {
                echo '====================================================='
                echo 'ETAPA 2: COMPILACIÓN Y TESTS AUTOMATIZADOS'
                echo '====================================================='
                echo 'Paso 2.1: Verificación de compilación / sintaxis...'
                bat 'npm run build'

                echo 'Paso 2.2: Ejecución de pruebas unitarias automatizadas...'
                bat 'npm test'
            }
        }

        stage('Notificación de ejecución') {
            steps {
                echo '====================================================='
                echo 'ETAPA 3: NOTIFICACIÓN DE ESTADO'
                echo '====================================================='
                echo 'Preparando y despachando notificación al canal de Discord...'
            }
        }
    }

    post {
        success {
            echo '>>> El pipeline finalizó con ÉXITO. Enviando notificación verde...'
            withCredentials([string(credentialsId: 'discord-webhook-url', variable: 'DISCORD_WEBHOOK')]) {
                bat 'set PIPELINE_STATUS=SUCCESS&& node scripts/notify-discord.js'
            }
        }
        failure {
            echo '>>> El pipeline presentó FALLOS. Enviando notificación roja...'
            withCredentials([string(credentialsId: 'discord-webhook-url', variable: 'DISCORD_WEBHOOK')]) {
                bat 'set PIPELINE_STATUS=FAILURE&& node scripts/notify-discord.js'
            }
        }
    }
}
