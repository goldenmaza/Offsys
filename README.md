# Offsys &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/goldenmaza/offsys/blob/master/LICENSE.md)

Note: This is a work in progress...

This is a .Net Core application which is my first attempt at making a front-end (React) and
a back-end (C#) that let's a user choose different aspects of a cleaning service and the total
price is calculated during user interactions.

The application contains of two parts:


## Client

This part is where you will find the React source code and anything relating to the front-end.


## Server

This part is where the REST calls are processed, predefined Routing will determine which data
that will be returned. This part also contains the location where the data will be prepared, either
hardcoded (enough for v0.1) or gathered from a database.


### Possible API endpoints

* **/city/** - Which basically means that ALL available cities should be fetched...
* **/city/{id}/** - Which means that details of a specific city should be fetched:
  * Total price for cleaning a square feet in the targeted city.
  * Every available service (and their price) should be returned.
* **/city/{offer}** - Which means that the summary of the offer should be returned (not really sure why this can't be calculated in the front-end).
* **/process/{offer}** - Which basically means that the offer should be stored to a DB or sent to an E-mail address.

## License

Offsys is set to [MIT licensed](./LICENSE) as this is just an example project in .Net, C# and React.
