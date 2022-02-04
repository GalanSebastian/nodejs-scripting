pipeline {
    agent {
        docker {
            image 'node'
            args '-p 3000:3000 --network host'
        }
    }
    parameters {
        string(name: 'DOMAIN_NAME', defaultValue: 'ciq-partners.com', description: 'Domain name for new site')
        string(name: 'API_GATEWAY', defaultValue: '', description: 'AWS API Gateway for new site')
    }
    stages {
        stage('Deploy') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'cloudflare-automatic-site-creation', passwordVariable: 'pass', usernameVariable: 'user')]) {
                    sh '''
                        touch .env
                        echo "DOMAIN_NAME=${DOMAIN_NAME}" >> .env
                        echo "API_GATEWAY=${API_GATEWAY}" >> .env
                        npm install
                        npm run start
                        npm -v
                    '''
                }
            }
        }
    }
}