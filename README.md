<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/alperade/farm-stack-bonjuur-app">
    <img src="/ghi/src/media/logo.png" alt="Logo" width="300" height="90">
  </a>
  <h3 align="center">Bonjuur App</h3>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#deployment-resources">Deployment Resources</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://bonjuurreact.azurewebsites.net/)

Bonjuur is a housekeeping services startup based in New York City. Bonjuur App is a RESTful web application for managing subscriptions and scheduling cleaning appointments.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* FastAPI
* ReactJS
* MongoDB
* MS Azure
* Bootstrap
* React-Redux

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these steps.

### Prerequisites

* Run Docker
* Create Docker Volume
  ```sh
  docker volume create bonjuur-mongo-data
  ```
* Build Docker Images
  ```sh
  docker compose build
  ```
* Run Docker Containers
  ```sh
  docker compose up
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/alperade/farm-stack-bonjuur-app.git
   ```
2. Sign up to Atlas Mongo and create a cluster

3. Create an `.env` file
   ```py
   MONGO_URL = 'ENTER MONGO URL HERE'
   SIGNING_KEY = 'ENTER SIGNING KEY HERE'
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- DEPLOYMENT RESOURCES -->
## Deployment Resources

* https://learn.microsoft.com/en-us/azure/app-service/tutorial-custom-container?tabs=azure-cli&pivots=container-linux
* Specify --platform=linux/amd64 each time you need to build or run an amd64 image/container.
* https://stackoverflow.com/questions/60163440/docker-fails-to-pull-the-image-from-within-azure-app-service

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [ ] Integrate MS Graph API for sending 'forgot password' emails - https://developer.microsoft.com/en-us/graph/quick-start
- [ ] Integrate Stripe API for payments
- [ ] Link to custom domain
- [ ] Stop subscription page (turn is_active to false)
- [ ] Update Readme Roadmap

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Alper Ademoglu: alperademoglu@gmail.com - [Linkedin](https://www.linkedin.com/in/alper-ademoglu/)

Project Link: [https://github.com/alperade/farm-stack-bonjuur-app/](https://github.com/alperade/farm-stack-bonjuur-app/)

Live Link: [https://bonjuurreact.azurewebsites.net/](https://bonjuurreact.azurewebsites.net/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: /ghi/src/media/screenshot.png
