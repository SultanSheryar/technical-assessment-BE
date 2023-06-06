## Clone
First you need to clone this project to your local machine

## Setting up Docker
You need to make sure you have docker installed and running on your machine
Then run the following command from the terminal or powershell

```shell
$ docker build .\technical-backend -t sultan/dockerized
```
Once this is completed then you need to run following command

## Runing the project in dockerized enviornment

```shell
$ docker run -p 8080:3001 sultan/dockerized
```
