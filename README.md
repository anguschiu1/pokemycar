
- [pokecar](#pokecar)
- [Poke My Car, an anonymous car owner notification serivice](#poke-my-car--an-anonymous-car-owner-notification-serivice)
    - [Getting Started](#getting-started)
        - [Prerequisites](#prerequisites)
    - [Build Setup](#build-setup)
        - [Installing](#installing)
    - [Running the tests](#running-the-tests)
        - [Break down into end to end tests](#break-down-into-end-to-end-tests)
        - [And coding style tests](#and-coding-style-tests)
    - [Deployment](#deployment)
    - [Built With](#built-with)
    - [Contributing](#contributing)
    - [Versioning](#versioning)
    - [Authors](#authors)
    - [License](#license)
    - [Acknowledgments](#acknowledgments)


# Poke My Car, an anonymous car owner notification serivice

Poke My Car is notification service for car owner. By sticking a QR code image on the car windshield, anyone can scan and inform something to the car owner by scanning the QR code on the windshield.

For example, if a pedestrain find the car is obstructing his way, he can scan the QR code, and send a brief message to car owners to drive the car away.

The app goes into several sections:

1. Car owner notification subscription service
1. QR code label customizer and generator
1. Notification module (thinking it can as simply as using IFTTT to do the notifications)
1. Notification display module

Future features:

1. Associate poke sender to car owner identity (if they wish to)
1. Enable car owner to reply to those who poke them
1. Social network function (e.g. setup e.g. `Meter community` or `Traffic Ticket avoidance radar`)
1. Integrated to social network or IM module
1. Cryptocurrency exchange capability

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```bash
Give examples
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


### Installing

A step by step series of examples that tell you have to get a development env running

The project employ progressive framework by vue.js, please refers:
https://dev.to/hyra/using-vue-components-in-your-express-app-d15 

```bash
Give the example
```

And repeat

```bash
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```bash
Give an example
```

### And coding style tests

Explain what these tests test and why

```bash
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Hat tip to anyone who's code was used
- Inspiration
- etc