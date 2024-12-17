# Node.js with MongoDB Deployment on AWS EC2

This project demonstrates how to create a Node.js application with MongoDB and deploy it on an AWS EC2 instance.

## Prerequisites

- Node.js and npm installed
- MongoDB installed locally or MongoDB Atlas account
- AWS account
- AWS CLI installed and configured
- EC2 instance running Ubuntu

## Installation

## Deployment on AWS EC2

1. Launch an EC2 instance with Ubuntu.

2. Connect to your EC2 instance via SSH:

   ```sh
   ssh -i your-key-pair.pem ec2-user@your-ec2-public-dns
   ```

   or other options.

3. Configure the nodejs yaml file

```
runs-on: self-hosted
...
 - run: npm ci
    - run: |
          touch .env
          echo "${{ secrets.PROD }}" > .env

    - run: pm2 restart apiserver
```

4. Add the secret variable

```
   - Settings > secrets and variables > Actions
   - add the secret variables
     PORT=8001
     MONGO_URI=mongodb://localhost:27017/
```

<!-- runner  -->

5. Create the new self hosted runner

```
settings > actions > Runners
create a new self hosted runner
choose linux

```

6. Install the runner on the EC2 instance
   - Install all the cmd given in the runner page (from the download and configure)
   - sudo ./svc.sh install
   - sudo ./svc.sh start

---

## After successfully connecting github to remote server follow this commands

Step 1: Update Package Repositories
Run the following command to update your package repositories:

```
sudo apt update
```

Step 2: Install Node.js
Install Node.js using the following command:

```
sudo apt-get install -y nodejs npm
```

Step 3: Install Nginx
Install Nginx to act as a reverse proxy for your Node.js application:

```
sudo apt-get install -y nginx
```

Step 4: Install PM2
Install PM2 globally to manage your Node.js application:

```
sudo npm i -g pm2
```

Step 5: Configure Nginx
Navigate to the Nginx sites-available directory and open the default configuration file for editing:

```
cd /etc/nginx/sites-available
sudo nano default
```

Inside the Nginx configuration file, add the following block to configure the reverse proxy for your API:

```
location /api {
rewrite ^\/api\/(.\*)$ /api/$1 break;
proxy_pass http://localhost:8000;
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}
```

Step 6: Restart Nginx
After making changes to the Nginx configuration, restart Nginx to apply the changes:

```
sudo systemctl restart nginx
```

Step 7: Start Your Node.js Application with PM2
Navigate to your project directory and start your Node.js application using PM2. Replace server.js with the actual filename of your Node.js application:

```
cd /path/to/your/app
pm2 start server.js --name=awsserver
```

Step 8: Restart Your Node.js Application with PM2 (Optional)
If you need to restart your Node.js application managed by PM2, you can use the following command:

```
pm2 restart Backend
```

## API

### API Endpoints

GET http://Public IPv4 address/api/get_product_details

GET http://Public IPv4 address/api/get

GET http://Public IPv4 address/api/users/create

GET http://Public IPv4 address/api/users/get

GET http://Public IPv4 address/api/users/get/:id
