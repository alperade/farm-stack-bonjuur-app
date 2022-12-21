FROM python:3.10-bullseye
RUN python -m pip install --upgrade pip
WORKDIR /app

COPY . .

RUN python -m pip install -r requirements.txt

ENV SSH_PASSWD "root:Docker!"
ENV MONGO_URL "mongodb+srv://fomore:fomore@cluster0.kbugi1e.mongodb.net/?retryWrites=true&w=majority"
ENV SIGNING_KEY "87fe4a3fcfb60092dbaeb854a196bc3d9b190aed7930c734749e85245de698420c25f8e6899c421b4494e99459e01058de5daa9d49584cd62ec975da9aea33da"
ENV YELP_API_KEY "Bearer xnlDFfP7qAsXHVX1aodkgUbHA0JctTcbTA164YntRankOkCM8XLQKSgD0avLvKLYepgk_5meJEJwDtJvaYCLxavxBmA6rfHr7huAu7gpyy1v5Cq75BU2iFp53ndpY3Yx"

RUN apt-get update \
        && apt-get install -y --no-install-recommends dialog \
        && apt-get update \
	&& apt-get install -y --no-install-recommends openssh-server \
	&& echo "$SSH_PASSWD" | chpasswd

EXPOSE 8081
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8081", "--proxy-headers"]
