
# Not A CMS Concept

## Installation

Install NodeJS with npm, version >=0.10.

On MacOSX:

```sh
$ brew install node
```

On Ubuntu:

```sh
$ sudo add-apt-repository ppa:chris-lea/node.js
$ sudo apt-get update
$ sudo apt-get install nodejs
```

Install gulp globally:

```sh
$ npm install -g gulp
```

Install product:

```sh
$ npm install
```

Install and build resources:

```sh
$ gulp install
```

## Development

Start the development server on http://localhost:3000:

```sh
gulp
```

## Deployment

Push to production branch:

```sh
git push origin HEAD:production
```

Deploy with ansible:

```sh
$ ansible-playbook  -i etc/ansible/production etc/ansible/deploy.yml
```


