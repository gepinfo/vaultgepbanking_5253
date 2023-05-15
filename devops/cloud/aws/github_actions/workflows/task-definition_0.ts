module.exports = {
    requiresCompatibilities: [
        "FARGATE"
    ],
    "inferenceAccelerators": [],
    "containerDefinitions": [
        {
            "name": "gepbanking-5253",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-vaultgepbanking-5253-gepbanking:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8016",
                    "protocol": "tcp",
                    "hostPort": "8016"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@vaultgepbanking.local:27017/vaultgepbanking_5253?authSource=admin"},{"name":"MONGO_DOMAIN","value":"vaultgepbanking.local"},{"name":"CAMUNDAPOD_URL","value":"http://vaultgepbanking.local:8080"},{"name":"SECURITYURL","value":"http://vaultgepbanking.local:8003"},{"name":"AUTHPROXYURL","value":"http://vaultgepbanking.local:8001"},{"name":"ADMINURL","value":"http://vaultgepbanking.local:8004"},{"name":"CAMUNDAURL","value":"http://vaultgepbanking.local:8002"},{"name":"GCAMURL","value":"http://vaultgepbanking.local:8007"},{"name":"APIGATEWAY","value":"http://vaultgepbanking.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "vaultgepbanking"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/vaultgepbanking",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "gepsalesforcemanager-5253",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-vaultgepbanking-5253-gepsalesforcemanager:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8015",
                    "protocol": "tcp",
                    "hostPort": "8015"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@vaultgepbanking.local:27017/vaultgepbanking_5253?authSource=admin"},{"name":"MONGO_DOMAIN","value":"vaultgepbanking.local"},{"name":"CAMUNDAPOD_URL","value":"http://vaultgepbanking.local:8080"},{"name":"SECURITYURL","value":"http://vaultgepbanking.local:8003"},{"name":"AUTHPROXYURL","value":"http://vaultgepbanking.local:8001"},{"name":"ADMINURL","value":"http://vaultgepbanking.local:8004"},{"name":"CAMUNDAURL","value":"http://vaultgepbanking.local:8002"},{"name":"GCAMURL","value":"http://vaultgepbanking.local:8007"},{"name":"APIGATEWAY","value":"http://vaultgepbanking.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "vaultgepbanking"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/vaultgepbanking",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
    ],
    "volumes": [
        {
        "fsxWindowsFileServerVolumeConfiguration": null,
        "efsVolumeConfiguration": {
            "transitEncryptionPort": null,
            "fileSystemId": `${process.env.EFS_ID}`,
            "authorizationConfig": {
            "iam": "DISABLED",
            "accessPointId": null
            },
            "transitEncryption": "DISABLED",
            "rootDirectory": "/"
        },
        "name": "vaultgepbanking",
        "host": null,
        "dockerVolumeConfiguration": null
        }
    ],
    "networkMode": "awsvpc",
    "memory": "4096",
    "cpu": "1024",
    "executionRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`,
    "family": "vaultgepbanking0",
    "tags": [],
    "placementConstraints": [],
    "taskRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`

};
var ConfigurationJSON = JSON.stringify(module.exports);
const config = module.exports;

const jsonConfig = JSON.parse(JSON.stringify(ConfigurationJSON))

console.log(jsonConfig)
