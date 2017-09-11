# get-gravatar

Get the gravatar URL for a user.

## Getting Started

```sh
npm -g install graphcool
graphcool init
graphcool module add graphcool/modules/misc/get-gravatar
```

## Usage

This modules adds two RP hooks to your project, for `User` `CREATE` and `User` `UPDATE`, to retrieve the Gravatar URL for a user, based on the email address. It is stored in the `gravatarUrl` field on the `User` Type.
