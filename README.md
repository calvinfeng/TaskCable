# Task Cable
This is a experimental project for Rails 5 ActionCable

A client can create task and every other clients will receive the updates in real time using WebSocket technology

## Setup

### Task model
Use scaffold to save time
```
bundle exec rails g scaffold api::task title:string description:text completed:boolean
```

Rails magic is amazing...

Then set up database and run migration
```
bundle exec rails db:create
bundel exec rails db:migrate
```

### Task channel
