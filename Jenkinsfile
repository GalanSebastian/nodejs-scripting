pipeline {
    agent {
        docker {
            image 'node:lts-bullseye-slim'
            args '-p 3000:3000 --network host'
        }
    }
    parameters {
        string(name: 'FROM_BUILD', defaultValue: '', description: 'Build source')
        booleanParam(name: 'IS_READY', defaultValue: false, description: 'Is ready for prod?')
        string(name: 'DOMAIN_NAME', defaultValue: 'ciq-partners.com', description: 'Domain name for new site')
        string(name: 'API_GATEWAY', defaultValue: '', description: 'AWS API Gateway for new site')
        string(name: 'API_AUTH_EMAIL', defaultValue: '', description: 'Cloudflare api auth email')
        string(name: 'API_AUTH_KEY', defaultValue: '', description: 'Cloudflare api auth password')
    }
    stages {
        stage('Build') {
            steps {
                echo 'Compiling...'
                sleep 2
            }
        }
        stage('Deploy') {
            steps {
                echo "Deploying from source ${params.FROM_BUILD}"
                sh '''
                    touch .env
                    echo "API_AUTH_EMAIL=${API_AUTH_EMAIL}" > .env
                    echo "API_AUTH_KEY=${API_AUTH_KEY}" >> .env
                    echo "DOMAIN_NAME=${DOMAIN_NAME}" >> .env
                    echo "API_GATEWAY=${API_GATEWAY}" >> .env
                    cat .env
                    npm -v
                    npm install
                    npm run start
                '''
            }
        }
    }
}