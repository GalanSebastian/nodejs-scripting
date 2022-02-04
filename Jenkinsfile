pipeline {
    agent any
    parameters {
        string(name: 'FROM_BUILD', defaultValue: '', description: 'Build source')
        booleanParam(name: 'IS_READY', defaultValue: false, description: 'Is ready for prod?')
        string(name: 'DOMAIN_NAME', defaultValue: 'ciq-partners.com', description: 'Domain name for new site')
        string(name: 'API_GATEWAY', defaultValue: '', description: 'AWS API Gateway for new site')
        password(name: 'API_AUTH_EMAIL', defaultValue: '', description: 'Cloudflare api auth email')
        password(name: 'API_AUTH_KEY', defaultValue: '', description: 'Cloudflare api auth password')
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
                script{
                    def image = docker.image('mhart/alpine-node:8.11.3')
                    image.pull()
                    image.inside() {
                        sh 'id'
                        sh 'ls -lrt'
                        sh 'npm -v'
                        sh '''
                            touch .env
                            echo "API_AUTH_EMAIL=${API_AUTH_EMAIL}" > .env
                            echo "API_AUTH_KEY=${API_AUTH_KEY}" >> .env
                            echo "DOMAIN_NAME=${DOMAIN_NAME}" >> .env
                            echo "API_GATEWAY=${API_GATEWAY}" >> .env
                            cat .env
                            chown -R $(whoami) ~/.npm
                            npm install
                            npm run start
                        '''
                    }
                }
            }
        }
    }
}