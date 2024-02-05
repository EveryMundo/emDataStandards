[
    {
        "gtm.start": 1707156058136,
        "event": "gtm.js",
        "gtm.uniqueEventId": 6
    },
    {
        "event": "gtm.dom",
        "gtm.uniqueEventId": 7
    },
    {
        "event": "retail:pageview",
        "retail": {
            "meta": {
                "language": "en-US",
                "sessionId": "BXVOSORTDRONDDVHTPMT"
            },
            "airportCityMap": {
                "JFK": "NYC"
            },
            "airportCountryMap": {
                "MAD": "ES",
                "MIA": "US",
                "NYC": "US",
                "JFK": "US"
            },
            "flightSearch": {
                "origin": "MIA",
                "destination": "MAD",
                "departureDate": "2024-03-26",
                "returnDate": "2024-04-03",
                "tripType": "RoundTrip",
                "passengers": {
                    "numberOfAdults": 1,
                    "numberOfChildren": 0,
                    "numberOfInfants": 0,
                    "numberOfSeniors": 0,
                    "numberOfYouths": 0,
                    "numberOfResidents": 0,
                    "numberOfStudents": 0
                },
                "discounts": {},
                "award": false
            },
            "itinerary": {
                "bounds": [
                    {
                        "id": "BND_MIA_MAD_20240326",
                        "itineraryPortionId": "BND_MIA_MAD_20240326",
                        "origin": "MIA",
                        "destination": "MAD",
                        "originAirport": "MIA",
                        "destinationAirport": "MAD",
                        "sectors": [
                            {
                                "id": "SEC_MIA_MAD_20240326",
                                "originAirport": "MIA",
                                "destinationAirport": "MAD",
                                "startDate": "2024-03-26T22:45:00",
                                "endDate": "2024-03-27T12:05:00",
                                "elapsedDays": 1,
                                "duration": 500,
                                "fareFamilyCode": "BUS_FLEX_WW_L",
                                "segments": [
                                    {
                                        "id": "SEG_MIA_MAD_20240326",
                                        "originAirport": "MIA",
                                        "destinationAirport": "MAD",
                                        "marketingAirlineCode": "UX",
                                        "flightNumber": "98",
                                        "startDate": "2024-03-26T22:45:00",
                                        "endDate": "2024-03-27T12:05:00",
                                        "elapsedDays": 1,
                                        "duration": 500,
                                        "arrivalTerminal": "1",
                                        "legs": [
                                            {
                                                "id": "SEG_MIA_MAD_20240326",
                                                "originAirport": "MIA",
                                                "destinationAirport": "MAD",
                                                "arrivalTerminal": "1",
                                                "startDate": "2024-03-26T22:45:00",
                                                "endDate": "2024-03-27T12:05:00",
                                                "elapsedDays": 1,
                                                "duration": 500,
                                                "aircraftType": "789",
                                                "itineraryPortionId": "SEG_MIA_MAD_20240326"
                                            }
                                        ],
                                        "rbd": "J",
                                        "cabinCode": "Economy",
                                        "fareBasisCode": "JYYRAH",
                                        "itineraryPortionId": "SEG_MIA_MAD_20240326"
                                    }
                                ],
                                "itineraryPortionId": "SEC_MIA_MAD_20240326"
                            }
                        ],
                        "startDate": "2024-03-26T22:45:00",
                        "endDate": "2024-03-27T12:05:00",
                        "fareFamilyCode": "BUS_FLEX_WW_L"
                    },
                    {
                        "id": "BND_MAD_MIA_20240403",
                        "itineraryPortionId": "BND_MAD_MIA_20240403",
                        "origin": "MAD",
                        "destination": "MIA",
                        "originAirport": "MAD",
                        "destinationAirport": "MIA",
                        "sectors": [
                            {
                                "id": "SEC_MAD_MIA_20240403",
                                "originAirport": "MAD",
                                "destinationAirport": "MIA",
                                "startDate": "2024-04-03T10:00:00",
                                "endDate": "2024-04-04T10:16:00",
                                "elapsedDays": 1,
                                "duration": 1816,
                                "fareFamilyCode": "ECO_STD_WW_L",
                                "segments": [
                                    {
                                        "id": "SEG_MAD_JFK_20240403",
                                        "originAirport": "MAD",
                                        "destinationAirport": "JFK",
                                        "marketingAirlineCode": "UX",
                                        "operatingAirlineCode": "DL",
                                        "flightNumber": "3391",
                                        "startDate": "2024-04-03T10:00:00",
                                        "endDate": "2024-04-03T12:30:00",
                                        "elapsedDays": 0,
                                        "duration": 510,
                                        "departureTerminal": "1",
                                        "arrivalTerminal": "4",
                                        "legs": [
                                            {
                                                "id": "SEG_MAD_JFK_20240403",
                                                "originAirport": "MAD",
                                                "destinationAirport": "JFK",
                                                "arrivalTerminal": "4",
                                                "departureTerminal": "1",
                                                "startDate": "2024-04-03T10:00:00",
                                                "endDate": "2024-04-03T12:30:00",
                                                "elapsedDays": 0,
                                                "duration": 510,
                                                "aircraftType": "764",
                                                "itineraryPortionId": "SEG_MAD_JFK_20240403"
                                            }
                                        ],
                                        "layoverFollowing": {
                                            "startDate": "2024-04-03T12:30:00",
                                            "endDate": "2024-04-04T07:00:00",
                                            "arrivalTerminal": "4",
                                            "departureTerminal": "4",
                                            "changeOfAirport": false,
                                            "changeOfTerminal": false,
                                            "elapsedDays": 1,
                                            "duration": 1110
                                        },
                                        "rbd": "M",
                                        "cabinCode": "Economy",
                                        "fareBasisCode": "MLYRAE",
                                        "itineraryPortionId": "SEG_MAD_JFK_20240403"
                                    },
                                    {
                                        "id": "SEG_JFK_MIA_20240404",
                                        "originAirport": "JFK",
                                        "destinationAirport": "MIA",
                                        "marketingAirlineCode": "DL",
                                        "flightNumber": "1528",
                                        "startDate": "2024-04-04T07:00:00",
                                        "endDate": "2024-04-04T10:16:00",
                                        "elapsedDays": 0,
                                        "duration": 196,
                                        "departureTerminal": "4",
                                        "legs": [
                                            {
                                                "id": "SEG_JFK_MIA_20240404",
                                                "originAirport": "JFK",
                                                "destinationAirport": "MIA",
                                                "departureTerminal": "4",
                                                "startDate": "2024-04-04T07:00:00",
                                                "endDate": "2024-04-04T10:16:00",
                                                "elapsedDays": 0,
                                                "duration": 196,
                                                "aircraftType": "321",
                                                "itineraryPortionId": "SEG_JFK_MIA_20240404"
                                            }
                                        ],
                                        "rbd": "K",
                                        "cabinCode": "Economy",
                                        "fareBasisCode": "MLYRAE",
                                        "itineraryPortionId": "SEG_JFK_MIA_20240404"
                                    }
                                ],
                                "itineraryPortionId": "SEC_MAD_MIA_20240403"
                            }
                        ],
                        "startDate": "2024-04-03T10:00:00",
                        "endDate": "2024-04-04T10:16:00",
                        "fareFamilyCode": "ECO_STD_WW_L"
                    }
                ],
                "itineraryPortionId": "ITY_MIA_MAD_20240326",
                "tripType": "RoundTrip",
                "stopover": false
            },
            "booking": {
                "messages": [],
                "dictionary": {
                    "airports": {
                        "MAD": {
                            "name": "Madrid Barajas",
                            "cityCode": "MAD",
                            "countryCode": "ES"
                        },
                        "MIA": {
                            "name": "Miami International",
                            "cityCode": "MIA",
                            "countryCode": "US"
                        },
                        "JFK": {
                            "name": "John F Kennedy",
                            "cityCode": "NYC",
                            "countryCode": "US"
                        }
                    },
                    "cities": {
                        "MAD": {
                            "name": "Madrid",
                            "countryCode": "ES"
                        },
                        "MIA": {
                            "name": "Miami",
                            "countryCode": "US"
                        },
                        "NYC": {
                            "name": "New York",
                            "countryCode": "US"
                        }
                    },
                    "municipalities": {}
                },
                "bookingId": "05543c01-9034-42b7-b8a4-bc3d457d17db",
                "externalBooking": false,
                "recordLocator": "OU69HF",
                "bookingStatus": "CUSTOMIZED",
                "ticketStatus": "XL",
                "purchasedDate": "2024-02-05",
                "itinerary": {
                    "id": "ITY_MIA_MAD_20240326",
                    "tripType": "RoundTrip",
                    "stopover": false,
                    "bounds": [
                        {
                            "id": "BND_MIA_MAD_20240326",
                            "originAirport": "MIA",
                            "destinationAirport": "MAD",
                            "originCity": "MIA",
                            "destinationCity": "MAD",
                            "startDate": "2024-03-26T22:45:00",
                            "endDate": "2024-03-27T12:05:00",
                            "fareFamilyCode": "BUS_FLEX_WW_L",
                            "sectors": [
                                {
                                    "id": "SEC_MIA_MAD_20240326",
                                    "originAirport": "MIA",
                                    "destinationAirport": "MAD",
                                    "startDate": "2024-03-26T22:45:00",
                                    "endDate": "2024-03-27T12:05:00",
                                    "elapsedDays": 1,
                                    "duration": 500,
                                    "fareFamilyCode": "BUS_FLEX_WW_L",
                                    "segments": [
                                        {
                                            "id": "SEG_MIA_MAD_20240326",
                                            "originAirport": "MIA",
                                            "destinationAirport": "MAD",
                                            "marketingAirlineCode": "UX",
                                            "flightNumber": "98",
                                            "startDate": "2024-03-26T22:45:00",
                                            "endDate": "2024-03-27T12:05:00",
                                            "elapsedDays": 1,
                                            "duration": 500,
                                            "arrivalTerminal": "1",
                                            "legs": [
                                                {
                                                    "id": "SEG_MIA_MAD_20240326",
                                                    "originAirport": "MIA",
                                                    "destinationAirport": "MAD",
                                                    "arrivalTerminal": "1",
                                                    "startDate": "2024-03-26T22:45:00",
                                                    "endDate": "2024-03-27T12:05:00",
                                                    "elapsedDays": 1,
                                                    "duration": 500,
                                                    "aircraftType": "789"
                                                }
                                            ],
                                            "rbd": "J",
                                            "cabinCode": "Economy",
                                            "fareBasisCode": "JYYRAH"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "BND_MAD_MIA_20240403",
                            "originAirport": "MAD",
                            "destinationAirport": "MIA",
                            "originCity": "MAD",
                            "destinationCity": "MIA",
                            "startDate": "2024-04-03T10:00:00",
                            "endDate": "2024-04-04T10:16:00",
                            "fareFamilyCode": "ECO_STD_WW_L",
                            "sectors": [
                                {
                                    "id": "SEC_MAD_MIA_20240403",
                                    "originAirport": "MAD",
                                    "destinationAirport": "MIA",
                                    "startDate": "2024-04-03T10:00:00",
                                    "endDate": "2024-04-04T10:16:00",
                                    "elapsedDays": 1,
                                    "duration": 1816,
                                    "fareFamilyCode": "ECO_STD_WW_L",
                                    "segments": [
                                        {
                                            "id": "SEG_MAD_JFK_20240403",
                                            "originAirport": "MAD",
                                            "destinationAirport": "JFK",
                                            "marketingAirlineCode": "UX",
                                            "operatingAirlineCode": "DL",
                                            "flightNumber": "3391",
                                            "startDate": "2024-04-03T10:00:00",
                                            "endDate": "2024-04-03T12:30:00",
                                            "elapsedDays": 0,
                                            "duration": 510,
                                            "departureTerminal": "1",
                                            "arrivalTerminal": "4",
                                            "legs": [
                                                {
                                                    "id": "SEG_MAD_JFK_20240403",
                                                    "originAirport": "MAD",
                                                    "destinationAirport": "JFK",
                                                    "arrivalTerminal": "4",
                                                    "departureTerminal": "1",
                                                    "startDate": "2024-04-03T10:00:00",
                                                    "endDate": "2024-04-03T12:30:00",
                                                    "elapsedDays": 0,
                                                    "duration": 510,
                                                    "aircraftType": "764"
                                                }
                                            ],
                                            "layoverFollowing": {
                                                "startDate": "2024-04-03T12:30:00",
                                                "endDate": "2024-04-04T07:00:00",
                                                "arrivalTerminal": "4",
                                                "departureTerminal": "4",
                                                "changeOfAirport": false,
                                                "changeOfTerminal": false,
                                                "elapsedDays": 1,
                                                "duration": 1110
                                            },
                                            "rbd": "M",
                                            "cabinCode": "Economy",
                                            "fareBasisCode": "MLYRAE"
                                        },
                                        {
                                            "id": "SEG_JFK_MIA_20240404",
                                            "originAirport": "JFK",
                                            "destinationAirport": "MIA",
                                            "marketingAirlineCode": "DL",
                                            "flightNumber": "1528",
                                            "startDate": "2024-04-04T07:00:00",
                                            "endDate": "2024-04-04T10:16:00",
                                            "elapsedDays": 0,
                                            "duration": 196,
                                            "departureTerminal": "4",
                                            "legs": [
                                                {
                                                    "id": "SEG_JFK_MIA_20240404",
                                                    "originAirport": "JFK",
                                                    "destinationAirport": "MIA",
                                                    "departureTerminal": "4",
                                                    "startDate": "2024-04-04T07:00:00",
                                                    "endDate": "2024-04-04T10:16:00",
                                                    "elapsedDays": 0,
                                                    "duration": 196,
                                                    "aircraftType": "321"
                                                }
                                            ],
                                            "rbd": "K",
                                            "cabinCode": "Economy",
                                            "fareBasisCode": "MLYRAE"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                "contactDetails": {
                    "email": "kwarzel@pros.com",
                    "notificationNumber": {
                        "prefix": "+1",
                        "number": "3053056064"
                    }
                },
                "passengerDictionary": {
                    "1": {
                        "id": 1,
                        "gender": "FEMALE",
                        "type": "ADT",
                        "firstName": "Katharina",
                        "salutation": "MRS",
                        "lastName": "Warzel",
                        "secondLastName": "",
                        "dateOfBirth": "1990-03-26",
                        "travelDocument": {
                            "type": "P",
                            "number": "C4FX5VP2F",
                            "issueCountry": "DE",
                            "nationality": "DE",
                            "expirationDate": "2026-11-14"
                        },
                        "visaList": [],
                        "frequentFlyerProgram": "DL",
                        "frequentFlyerNumber": "9465866359"
                    }
                },
                "totalNumberOfPassengers": 1,
                "itineraryPortionDictionary": {
                    "BND_MAD_MIA_20240403": {
                        "id": "BND_MAD_MIA_20240403",
                        "level": "bound",
                        "originAirport": "MAD",
                        "destinationAirport": "MIA",
                        "startDate": "2024-04-03T10:00:00",
                        "endDate": "2024-04-04T10:16:00"
                    },
                    "SEC_MIA_MAD_20240326": {
                        "id": "SEC_MIA_MAD_20240326",
                        "level": "sector",
                        "originAirport": "MIA",
                        "destinationAirport": "MAD",
                        "startDate": "2024-03-26T22:45:00",
                        "endDate": "2024-03-27T12:05:00"
                    },
                    "ITY_MIA_MAD_20240326": {
                        "id": "ITY_MIA_MAD_20240326",
                        "level": "itinerary",
                        "originAirport": "MIA",
                        "destinationAirport": "MAD",
                        "startDate": "2024-03-26T22:45:00",
                        "endDate": "2024-04-04T07:00:00"
                    },
                    "BND_MIA_MAD_20240326": {
                        "id": "BND_MIA_MAD_20240326",
                        "level": "bound",
                        "originAirport": "MIA",
                        "destinationAirport": "MAD",
                        "startDate": "2024-03-26T22:45:00",
                        "endDate": "2024-03-27T12:05:00"
                    },
                    "SEC_MAD_MIA_20240403": {
                        "id": "SEC_MAD_MIA_20240403",
                        "level": "sector",
                        "originAirport": "MAD",
                        "destinationAirport": "MIA",
                        "startDate": "2024-04-03T10:00:00",
                        "endDate": "2024-04-04T10:16:00"
                    },
                    "SEG_MAD_JFK_20240403": {
                        "id": "SEG_MAD_JFK_20240403",
                        "level": "segment",
                        "originAirport": "MAD",
                        "destinationAirport": "JFK",
                        "startDate": "2024-04-03T10:00:00",
                        "endDate": "2024-04-03T12:30:00"
                    },
                    "SEG_MIA_MAD_20240326": {
                        "id": "SEG_MIA_MAD_20240326",
                        "level": "segment",
                        "originAirport": "MIA",
                        "destinationAirport": "MAD",
                        "startDate": "2024-03-26T22:45:00",
                        "endDate": "2024-03-27T12:05:00"
                    },
                    "SEG_JFK_MIA_20240404": {
                        "id": "SEG_JFK_MIA_20240404",
                        "level": "segment",
                        "originAirport": "JFK",
                        "destinationAirport": "MIA",
                        "startDate": "2024-04-04T07:00:00",
                        "endDate": "2024-04-04T10:16:00"
                    }
                },
                "passengersServices": [
                    {
                        "passengerId": 1,
                        "isInfant": false,
                        "serviceItineraryPortions": [
                            {
                                "itineraryPortionId": "SEG_MIA_MAD_20240326",
                                "serviceCategories": [
                                    {
                                        "code": "SEAT",
                                        "services": [
                                            {
                                                "itineraryPortionId": "SEG_MIA_MAD_20240326",
                                                "passengerId": 1,
                                                "serviceCategoryCode": "SEAT",
                                                "marketingServiceCategoryCode": "SEAT",
                                                "serviceCode": "SEAT",
                                                "unit": "PCE",
                                                "quantityToBook": 1,
                                                "quantityPurchased": 0,
                                                "maximumPurchasable": 1,
                                                "preOrdered": false,
                                                "selectedSeatNumber": "3D"
                                            }
                                        ]
                                    },
                                    {
                                        "code": "BAGGAGE",
                                        "services": [
                                            {
                                                "itineraryPortionId": "BND_MIA_MAD_20240326",
                                                "passengerId": 1,
                                                "serviceCategoryCode": "BAGGAGE",
                                                "marketingServiceCategoryCode": "BAGGAGE",
                                                "serviceCode": "PDBG",
                                                "unit": "PCE",
                                                "quantityToBook": 1,
                                                "quantityPurchased": 0,
                                                "maximumPurchasable": 0,
                                                "preOrdered": false,
                                                "price": 100,
                                                "currency": "EUR",
                                                "baggageCharacteristics": {
                                                    "weightKg": 23,
                                                    "weightLbs": 50,
                                                    "dimensionsTotalCm": 158,
                                                    "dimensionsTotalIn": 62
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        "code": "SPORT",
                                        "services": [
                                            {
                                                "itineraryPortionId": "BND_MIA_MAD_20240326",
                                                "passengerId": 1,
                                                "serviceCategoryCode": "SPORT",
                                                "marketingServiceCategoryCode": "SPORT",
                                                "serviceCode": "BIKE",
                                                "unit": "PCE",
                                                "quantityToBook": 1,
                                                "quantityPurchased": 0,
                                                "maximumPurchasable": 0,
                                                "preOrdered": false,
                                                "price": 200,
                                                "currency": "EUR"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "itineraryPortionId": "SEG_MAD_JFK_20240403",
                                "serviceCategories": []
                            },
                            {
                                "itineraryPortionId": "SEG_JFK_MIA_20240404",
                                "serviceCategories": []
                            }
                        ]
                    }
                ],
                "passengersBaggageAllowance": [
                    {
                        "passengerId": 1,
                        "isInfant": false,
                        "baggageItineraryPortions": [
                            {
                                "itineraryPortionId": "BND_MIA_MAD_20240326",
                                "baggageAllowance": {
                                    "checkedBaggage": {
                                        "numberOfPieces": 2,
                                        "pieceOrWeightAllowance": "PIECE",
                                        "baggageCharacteristics": {
                                            "weightKg": 32,
                                            "weightLbs": 70,
                                            "dimensionsTotalCm": 158,
                                            "dimensionsTotalIn": 62
                                        }
                                    }
                                }
                            },
                            {
                                "itineraryPortionId": "BND_MAD_MIA_20240403",
                                "baggageAllowance": {
                                    "checkedBaggage": {
                                        "numberOfPieces": 1,
                                        "pieceOrWeightAllowance": "PIECE",
                                        "baggageCharacteristics": {
                                            "weightKg": 23,
                                            "weightLbs": 50,
                                            "dimensionsTotalCm": 158,
                                            "dimensionsTotalIn": 62
                                        }
                                    }
                                }
                            }
                        ]
                    }
                ],
                "passengersSpecialAssistance": [],
                "customizable": true,
                "customization": {
                    "customizationOfServices": true,
                    "modificationOfPassengers": false
                },
                "bookingCompletionStep": "PAYMENT",
                "servicesToBook": [
                    {
                        "realCategoryCode": "SEAT",
                        "categoryCode": "SEAT",
                        "itineraryPortionId": "SEG_MIA_MAD_20240326",
                        "passengerId": 1,
                        "serviceCode": "SEAT",
                        "quantityPurchased": 0,
                        "quantity": 1,
                        "seatNumber": "3D",
                        "unit": "PCE",
                        "preOrdered": false
                    },
                    {
                        "realCategoryCode": "BAGGAGE",
                        "categoryCode": "BAGGAGE",
                        "itineraryPortionId": "BND_MIA_MAD_20240326",
                        "passengerId": 1,
                        "serviceCode": "PDBG",
                        "quantityPurchased": 0,
                        "quantity": 1,
                        "currency": "EUR",
                        "servicePrice": 100,
                        "unit": "PCE",
                        "preOrdered": false
                    },
                    {
                        "realCategoryCode": "SPORT",
                        "categoryCode": "SPORT",
                        "itineraryPortionId": "BND_MIA_MAD_20240326",
                        "passengerId": 1,
                        "serviceCode": "BIKE",
                        "quantityPurchased": 0,
                        "quantity": 1,
                        "currency": "EUR",
                        "servicePrice": 200,
                        "unit": "PCE",
                        "preOrdered": false
                    }
                ],
                "prices": {
                    "passengersPrices": [
                        {
                            "passengerId": 1,
                            "infantPrices": false,
                            "airTransportationPrices": [
                                {
                                    "currency": "EUR",
                                    "airTransportationTotalAmount": 4664.1,
                                    "airTransportationTotalAmount2": {
                                        "cash": 4664.1
                                    },
                                    "airTransportationNetAmount": 3552,
                                    "airTransportationNetAmount2": {
                                        "cash": 3552
                                    },
                                    "airTransportationChargesAmount": 4568.01,
                                    "airTransportationChargesAmount2": {
                                        "cash": 4568.01
                                    },
                                    "taxTotalAmount": 96.09,
                                    "taxTotalAmount2": {
                                        "cash": 96.09
                                    },
                                    "taxes": [
                                        {
                                            "amount": 20.2,
                                            "amount2": {
                                                "cash": 20.2
                                            },
                                            "code": "JD"
                                        },
                                        {
                                            "amount": 0.63,
                                            "amount2": {
                                                "cash": 0.63
                                            },
                                            "code": "OG"
                                        },
                                        {
                                            "amount": 3.27,
                                            "amount2": {
                                                "cash": 3.27
                                            },
                                            "code": "QV"
                                        },
                                        {
                                            "amount": 10.36,
                                            "amount2": {
                                                "cash": 10.36
                                            },
                                            "code": "AY"
                                        },
                                        {
                                            "amount": 20.51,
                                            "amount2": {
                                                "cash": 20.51
                                            },
                                            "code": "US"
                                        },
                                        {
                                            "amount": 20.51,
                                            "amount2": {
                                                "cash": 20.51
                                            },
                                            "code": "US"
                                        },
                                        {
                                            "amount": 3.54,
                                            "amount2": {
                                                "cash": 3.54
                                            },
                                            "code": "XA"
                                        },
                                        {
                                            "amount": 6.47,
                                            "amount2": {
                                                "cash": 6.47
                                            },
                                            "code": "XY"
                                        },
                                        {
                                            "amount": 6.44,
                                            "amount2": {
                                                "cash": 6.44
                                            },
                                            "code": "YC"
                                        },
                                        {
                                            "amount": 4.16,
                                            "amount2": {
                                                "cash": 4.16
                                            },
                                            "code": "XF"
                                        }
                                    ],
                                    "fuelSurchargeTotalAmount": 1016.01,
                                    "fuelSurchargeTotalAmount2": {
                                        "cash": 1016.01
                                    },
                                    "fuelSurcharges": [
                                        {
                                            "amount": 1016.01,
                                            "amount2": {
                                                "cash": 1016.01
                                            },
                                            "code": "YQ"
                                        }
                                    ]
                                }
                            ],
                            "extraPrices": [
                                {
                                    "currency": "EUR",
                                    "amount": 200,
                                    "amount2": {
                                        "cash": 200
                                    },
                                    "serviceCode": "BIKE"
                                },
                                {
                                    "currency": "EUR",
                                    "amount": 100,
                                    "amount2": {
                                        "cash": 100
                                    },
                                    "serviceCode": "PDBG"
                                }
                            ]
                        }
                    ],
                    "unpaidTotalsPerCurrency": {
                        "EUR": {
                            "currency": "EUR",
                            "airTransportationTotalAmount": 4664.1,
                            "airTransportationNetTotalAmount": 3552,
                            "airTransportationChargesTotalAmount": 4568.01,
                            "taxTotalAmount": 96.09,
                            "fuelSurchargeTotalAmount": 1016.01,
                            "extraTotalAmount": 300,
                            "grandTotalAmount": 4964.1
                        }
                    },
                    "paidTotalsPerCurrency": {}
                }
            }
        },
        "gtm.uniqueEventId": 8
    },
    {
        "event": "gtm.load",
        "gtm.uniqueEventId": 13
    },
    {
        "event": "flight_search",
        "trip": "MIA - MAD",
        "adult_passengers": 1,
        "child_passengers": 0,
        "infant_passengers": 0,
        "numBounds": "",
        "trip_type": "Round-Trip",
        "family_type": "",
        "market": "ES",
        "language": "en-US",
        "gtm.uniqueEventId": 18
    },
    {
        "event": "retail:flightSearch",
        "retail": {
            "meta": {
                "language": "en-US",
                "sessionId": "BXVOSORTDRONDDVHTPMT"
            },
            "airportCityMap": {
                "JFK": "NYC"
            },
            "airportCountryMap": {
                "MAD": "ES",
                "MIA": "US",
                "NYC": "US",
                "JFK": "US"
            },
            "flightSearch": {
                "origin": "MIA",
                "destination": "MAD",
                "departureDate": "2024-03-26",
                "returnDate": "2024-04-03",
                "tripType": "RoundTrip",
                "passengers": {
                    "numberOfAdults": 1,
                    "numberOfChildren": 0,
                    "numberOfInfants": 0,
                    "numberOfSeniors": 0,
                    "numberOfYouths": 0,
                    "numberOfResidents": 0,
                    "numberOfStudents": 0
                },
                "discounts": {},
                "award": false
            }
        },
        "gtm.uniqueEventId": 19
    },
    {
        "event": "retail:pageview",
        "retail": {
            "meta": {
                "language": "en-US",
                "sessionId": "BXVOSORTDRONDDVHTPMT"
            },
            "airportCityMap": {
                "JFK": "NYC"
            },
            "airportCountryMap": {
                "MAD": "ES",
                "MIA": "US",
                "NYC": "US",
                "JFK": "US"
            },
            "flightSearch": {
                "origin": "MIA",
                "destination": "MAD",
                "departureDate": "2024-03-26",
                "returnDate": "2024-04-03",
                "tripType": "RoundTrip",
                "passengers": {
                    "numberOfAdults": 1,
                    "numberOfChildren": 0,
                    "numberOfInfants": 0,
                    "numberOfSeniors": 0,
                    "numberOfYouths": 0,
                    "numberOfResidents": 0,
                    "numberOfStudents": 0
                },
                "discounts": {},
                "award": false
            },
            "itinerary": {
                "tripType": "RoundTrip",
                "stopover": false,
                "bounds": [
                    {
                        "id": 0,
                        "itineraryPortionId": "BND_MIA_MAD_2024-03-26",
                        "startDate": "2024-03-26",
                        "origin": "MIA",
                        "destination": "MAD",
                        "sectors": [
                            {
                                "startDate": "2024-03-26",
                                "origin": "MIA",
                                "itineraryPortionId": "SEC_MIA_MAD_2024-03-26}",
                                "destination": "MAD"
                            }
                        ]
                    },
                    {
                        "id": 1,
                        "itineraryPortionId": "BND_MAD_MIA_2024-04-03",
                        "startDate": "2024-04-03",
                        "origin": "MAD",
                        "destination": "MIA",
                        "sectors": [
                            {
                                "startDate": "2024-04-03",
                                "origin": "MAD",
                                "itineraryPortionId": "SEC_MAD_MIA_2024-04-03}",
                                "destination": "MIA"
                            }
                        ]
                    }
                ]
            },
            "booking": {
                "messages": [],
                "dictionary": {
                    "airports": {
                        "MAD": {
                            "name": "Madrid Barajas",
                            "cityCode": "MAD",
                            "countryCode": "ES"
                        },
                        "MIA": {
                            "name": "Miami International",
                            "cityCode": "MIA",
                            "countryCode": "US"
                        },
                        "JFK": {
                            "name": "John F Kennedy",
                            "cityCode": "NYC",
                            "countryCode": "US"
                        }
                    },
                    "cities": {
                        "MAD": {
                            "name": "Madrid",
                            "countryCode": "ES"
                        },
                        "MIA": {
                            "name": "Miami",
                            "countryCode": "US"
                        },
                        "NYC": {
                            "name": "New York",
                            "countryCode": "US"
                        }
                    },
                    "municipalities": {}
                },
                "bookingId": "05543c01-9034-42b7-b8a4-bc3d457d17db",
                "externalBooking": false,
                "recordLocator": "OU69HF",
                "bookingStatus": "CUSTOMIZED",
                "ticketStatus": "XL",
                "purchasedDate": "2024-02-05",
                "itinerary": {
                    "id": "ITY_MIA_MAD_20240326",
                    "tripType": "RoundTrip",
                    "stopover": false,
                    "bounds": [
                        {
                            "id": "BND_MIA_MAD_20240326",
                            "originAirport": "MIA",
                            "destinationAirport": "MAD",
                            "originCity": "MIA",
                            "destinationCity": "MAD",
                            "startDate": "2024-03-26T22:45:00",
                            "endDate": "2024-03-27T12:05:00",
                            "fareFamilyCode": "BUS_FLEX_WW_L",
                            "sectors": [
                                {
                                    "id": "SEC_MIA_MAD_20240326",
                                    "originAirport": "MIA",
                                    "destinationAirport": "MAD",
                                    "startDate": "2024-03-26T22:45:00",
                                    "endDate": "2024-03-27T12:05:00",
                                    "elapsedDays": 1,
                                    "duration": 500,
                                    "fareFamilyCode": "BUS_FLEX_WW_L",
                                    "segments": [
                                        {
                                            "id": "SEG_MIA_MAD_20240326",
                                            "originAirport": "MIA",
                                            "destinationAirport": "MAD",
                                            "marketingAirlineCode": "UX",
                                            "flightNumber": "98",
                                            "startDate": "2024-03-26T22:45:00",
                                            "endDate": "2024-03-27T12:05:00",
                                            "elapsedDays": 1,
                                            "duration": 500,
                                            "arrivalTerminal": "1",
                                            "legs": [
                                                {
                                                    "id": "SEG_MIA_MAD_20240326",
                                                    "originAirport": "MIA",
                                                    "destinationAirport": "MAD",
                                                    "arrivalTerminal": "1",
                                                    "startDate": "2024-03-26T22:45:00",
                                                    "endDate": "2024-03-27T12:05:00",
                                                    "elapsedDays": 1,
                                                    "duration": 500,
                                                    "aircraftType": "789"
                                                }
                                            ],
                                            "rbd": "J",
                                            "cabinCode": "Economy",
                                            "fareBasisCode": "JYYRAH"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "BND_MAD_MIA_20240403",
                            "originAirport": "MAD",
                            "destinationAirport": "MIA",
                            "originCity": "MAD",
                            "destinationCity": "MIA",
                            "startDate": "2024-04-03T10:00:00",
                            "endDate": "2024-04-04T10:16:00",
                            "fareFamilyCode": "ECO_STD_WW_L",
                            "sectors": [
                                {
                                    "id": "SEC_MAD_MIA_20240403",
                                    "originAirport": "MAD",
                                    "destinationAirport": "MIA",
                                    "startDate": "2024-04-03T10:00:00",
                                    "endDate": "2024-04-04T10:16:00",
                                    "elapsedDays": 1,
                                    "duration": 1816,
                                    "fareFamilyCode": "ECO_STD_WW_L",
                                    "segments": [
                                        {
                                            "id": "SEG_MAD_JFK_20240403",
                                            "originAirport": "MAD",
                                            "destinationAirport": "JFK",
                                            "marketingAirlineCode": "UX",
                                            "operatingAirlineCode": "DL",
                                            "flightNumber": "3391",
                                            "startDate": "2024-04-03T10:00:00",
                                            "endDate": "2024-04-03T12:30:00",
                                            "elapsedDays": 0,
                                            "duration": 510,
                                            "departureTerminal": "1",
                                            "arrivalTerminal": "4",
                                            "legs": [
                                                {
                                                    "id": "SEG_MAD_JFK_20240403",
                                                    "originAirport": "MAD",
                                                    "destinationAirport": "JFK",
                                                    "arrivalTerminal": "4",
                                                    "departureTerminal": "1",
                                                    "startDate": "2024-04-03T10:00:00",
                                                    "endDate": "2024-04-03T12:30:00",
                                                    "elapsedDays": 0,
                                                    "duration": 510,
                                                    "aircraftType": "764"
                                                }
                                            ],
                                            "layoverFollowing": {
                                                "startDate": "2024-04-03T12:30:00",
                                                "endDate": "2024-04-04T07:00:00",
                                                "arrivalTerminal": "4",
                                                "departureTerminal": "4",
                                                "changeOfAirport": false,
                                                "changeOfTerminal": false,
                                                "elapsedDays": 1,
                                                "duration": 1110
                                            },
                                            "rbd": "M",
                                            "cabinCode": "Economy",
                                            "fareBasisCode": "MLYRAE"
                                        },
                                        {
                                            "id": "SEG_JFK_MIA_20240404",
                                            "originAirport": "JFK",
                                            "destinationAirport": "MIA",
                                            "marketingAirlineCode": "DL",
                                            "flightNumber": "1528",
                                            "startDate": "2024-04-04T07:00:00",
                                            "endDate": "2024-04-04T10:16:00",
                                            "elapsedDays": 0,
                                            "duration": 196,
                                            "departureTerminal": "4",
                                            "legs": [
                                                {
                                                    "id": "SEG_JFK_MIA_20240404",
                                                    "originAirport": "JFK",
                                                    "destinationAirport": "MIA",
                                                    "departureTerminal": "4",
                                                    "startDate": "2024-04-04T07:00:00",
                                                    "endDate": "2024-04-04T10:16:00",
                                                    "elapsedDays": 0,
                                                    "duration": 196,
                                                    "aircraftType": "321"
                                                }
                                            ],
                                            "rbd": "K",
                                            "cabinCode": "Economy",
                                            "fareBasisCode": "MLYRAE"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                "contactDetails": {
                    "email": "kwarzel@pros.com",
                    "notificationNumber": {
                        "prefix": "+1",
                        "number": "3053056064"
                    }
                },
                "passengerDictionary": {
                    "1": {
                        "id": 1,
                        "gender": "FEMALE",
                        "type": "ADT",
                        "firstName": "Katharina",
                        "salutation": "MRS",
                        "lastName": "Warzel",
                        "secondLastName": "",
                        "dateOfBirth": "1990-03-26",
                        "travelDocument": {
                            "type": "P",
                            "number": "C4FX5VP2F",
                            "issueCountry": "DE",
                            "nationality": "DE",
                            "expirationDate": "2026-11-14"
                        },
                        "visaList": [],
                        "frequentFlyerProgram": "DL",
                        "frequentFlyerNumber": "9465866359"
                    }
                },
                "totalNumberOfPassengers": 1,
                "itineraryPortionDictionary": {
                    "BND_MAD_MIA_20240403": {
                        "id": "BND_MAD_MIA_20240403",
                        "level": "bound",
                        "originAirport": "MAD",
                        "destinationAirport": "MIA",
                        "startDate": "2024-04-03T10:00:00",
                        "endDate": "2024-04-04T10:16:00"
                    },
                    "SEC_MIA_MAD_20240326": {
                        "id": "SEC_MIA_MAD_20240326",
                        "level": "sector",
                        "originAirport": "MIA",
                        "destinationAirport": "MAD",
                        "startDate": "2024-03-26T22:45:00",
                        "endDate": "2024-03-27T12:05:00"
                    },
                    "ITY_MIA_MAD_20240326": {
                        "id": "ITY_MIA_MAD_20240326",
                        "level": "itinerary",
                        "originAirport": "MIA",
                        "destinationAirport": "MAD",
                        "startDate": "2024-03-26T22:45:00",
                        "endDate": "2024-04-04T07:00:00"
                    },
                    "BND_MIA_MAD_20240326": {
                        "id": "BND_MIA_MAD_20240326",
                        "level": "bound",
                        "originAirport": "MIA",
                        "destinationAirport": "MAD",
                        "startDate": "2024-03-26T22:45:00",
                        "endDate": "2024-03-27T12:05:00"
                    },
                    "SEC_MAD_MIA_20240403": {
                        "id": "SEC_MAD_MIA_20240403",
                        "level": "sector",
                        "originAirport": "MAD",
                        "destinationAirport": "MIA",
                        "startDate": "2024-04-03T10:00:00",
                        "endDate": "2024-04-04T10:16:00"
                    },
                    "SEG_MAD_JFK_20240403": {
                        "id": "SEG_MAD_JFK_20240403",
                        "level": "segment",
                        "originAirport": "MAD",
                        "destinationAirport": "JFK",
                        "startDate": "2024-04-03T10:00:00",
                        "endDate": "2024-04-03T12:30:00"
                    },
                    "SEG_MIA_MAD_20240326": {
                        "id": "SEG_MIA_MAD_20240326",
                        "level": "segment",
                        "originAirport": "MIA",
                        "destinationAirport": "MAD",
                        "startDate": "2024-03-26T22:45:00",
                        "endDate": "2024-03-27T12:05:00"
                    },
                    "SEG_JFK_MIA_20240404": {
                        "id": "SEG_JFK_MIA_20240404",
                        "level": "segment",
                        "originAirport": "JFK",
                        "destinationAirport": "MIA",
                        "startDate": "2024-04-04T07:00:00",
                        "endDate": "2024-04-04T10:16:00"
                    }
                },
                "passengersServices": [
                    {
                        "passengerId": 1,
                        "isInfant": false,
                        "serviceItineraryPortions": [
                            {
                                "itineraryPortionId": "SEG_MIA_MAD_20240326",
                                "serviceCategories": [
                                    {
                                        "code": "SEAT",
                                        "services": [
                                            {
                                                "itineraryPortionId": "SEG_MIA_MAD_20240326",
                                                "passengerId": 1,
                                                "serviceCategoryCode": "SEAT",
                                                "marketingServiceCategoryCode": "SEAT",
                                                "serviceCode": "SEAT",
                                                "unit": "PCE",
                                                "quantityToBook": 1,
                                                "quantityPurchased": 0,
                                                "maximumPurchasable": 1,
                                                "preOrdered": false,
                                                "selectedSeatNumber": "3D"
                                            }
                                        ]
                                    },
                                    {
                                        "code": "BAGGAGE",
                                        "services": [
                                            {
                                                "itineraryPortionId": "BND_MIA_MAD_20240326",
                                                "passengerId": 1,
                                                "serviceCategoryCode": "BAGGAGE",
                                                "marketingServiceCategoryCode": "BAGGAGE",
                                                "serviceCode": "PDBG",
                                                "unit": "PCE",
                                                "quantityToBook": 1,
                                                "quantityPurchased": 0,
                                                "maximumPurchasable": 0,
                                                "preOrdered": false,
                                                "price": 100,
                                                "currency": "EUR",
                                                "baggageCharacteristics": {
                                                    "weightKg": 23,
                                                    "weightLbs": 50,
                                                    "dimensionsTotalCm": 158,
                                                    "dimensionsTotalIn": 62
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        "code": "SPORT",
                                        "services": [
                                            {
                                                "itineraryPortionId": "BND_MIA_MAD_20240326",
                                                "passengerId": 1,
                                                "serviceCategoryCode": "SPORT",
                                                "marketingServiceCategoryCode": "SPORT",
                                                "serviceCode": "BIKE",
                                                "unit": "PCE",
                                                "quantityToBook": 1,
                                                "quantityPurchased": 0,
                                                "maximumPurchasable": 0,
                                                "preOrdered": false,
                                                "price": 200,
                                                "currency": "EUR"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "itineraryPortionId": "SEG_MAD_JFK_20240403",
                                "serviceCategories": []
                            },
                            {
                                "itineraryPortionId": "SEG_JFK_MIA_20240404",
                                "serviceCategories": []
                            }
                        ]
                    }
                ],
                "passengersBaggageAllowance": [
                    {
                        "passengerId": 1,
                        "isInfant": false,
                        "baggageItineraryPortions": [
                            {
                                "itineraryPortionId": "BND_MIA_MAD_20240326",
                                "baggageAllowance": {
                                    "checkedBaggage": {
                                        "numberOfPieces": 2,
                                        "pieceOrWeightAllowance": "PIECE",
                                        "baggageCharacteristics": {
                                            "weightKg": 32,
                                            "weightLbs": 70,
                                            "dimensionsTotalCm": 158,
                                            "dimensionsTotalIn": 62
                                        }
                                    }
                                }
                            },
                            {
                                "itineraryPortionId": "BND_MAD_MIA_20240403",
                                "baggageAllowance": {
                                    "checkedBaggage": {
                                        "numberOfPieces": 1,
                                        "pieceOrWeightAllowance": "PIECE",
                                        "baggageCharacteristics": {
                                            "weightKg": 23,
                                            "weightLbs": 50,
                                            "dimensionsTotalCm": 158,
                                            "dimensionsTotalIn": 62
                                        }
                                    }
                                }
                            }
                        ]
                    }
                ],
                "passengersSpecialAssistance": [],
                "customizable": true,
                "customization": {
                    "customizationOfServices": true,
                    "modificationOfPassengers": false
                },
                "bookingCompletionStep": "PAYMENT",
                "servicesToBook": [
                    {
                        "realCategoryCode": "SEAT",
                        "categoryCode": "SEAT",
                        "itineraryPortionId": "SEG_MIA_MAD_20240326",
                        "passengerId": 1,
                        "serviceCode": "SEAT",
                        "quantityPurchased": 0,
                        "quantity": 1,
                        "seatNumber": "3D",
                        "unit": "PCE",
                        "preOrdered": false
                    },
                    {
                        "realCategoryCode": "BAGGAGE",
                        "categoryCode": "BAGGAGE",
                        "itineraryPortionId": "BND_MIA_MAD_20240326",
                        "passengerId": 1,
                        "serviceCode": "PDBG",
                        "quantityPurchased": 0,
                        "quantity": 1,
                        "currency": "EUR",
                        "servicePrice": 100,
                        "unit": "PCE",
                        "preOrdered": false
                    },
                    {
                        "realCategoryCode": "SPORT",
                        "categoryCode": "SPORT",
                        "itineraryPortionId": "BND_MIA_MAD_20240326",
                        "passengerId": 1,
                        "serviceCode": "BIKE",
                        "quantityPurchased": 0,
                        "quantity": 1,
                        "currency": "EUR",
                        "servicePrice": 200,
                        "unit": "PCE",
                        "preOrdered": false
                    }
                ],
                "prices": {
                    "passengersPrices": [
                        {
                            "passengerId": 1,
                            "infantPrices": false,
                            "airTransportationPrices": [
                                {
                                    "currency": "EUR",
                                    "airTransportationTotalAmount": 4664.1,
                                    "airTransportationTotalAmount2": {
                                        "cash": 4664.1
                                    },
                                    "airTransportationNetAmount": 3552,
                                    "airTransportationNetAmount2": {
                                        "cash": 3552
                                    },
                                    "airTransportationChargesAmount": 4568.01,
                                    "airTransportationChargesAmount2": {
                                        "cash": 4568.01
                                    },
                                    "taxTotalAmount": 96.09,
                                    "taxTotalAmount2": {
                                        "cash": 96.09
                                    },
                                    "taxes": [
                                        {
                                            "amount": 20.2,
                                            "amount2": {
                                                "cash": 20.2
                                            },
                                            "code": "JD"
                                        },
                                        {
                                            "amount": 0.63,
                                            "amount2": {
                                                "cash": 0.63
                                            },
                                            "code": "OG"
                                        },
                                        {
                                            "amount": 3.27,
                                            "amount2": {
                                                "cash": 3.27
                                            },
                                            "code": "QV"
                                        },
                                        {
                                            "amount": 10.36,
                                            "amount2": {
                                                "cash": 10.36
                                            },
                                            "code": "AY"
                                        },
                                        {
                                            "amount": 20.51,
                                            "amount2": {
                                                "cash": 20.51
                                            },
                                            "code": "US"
                                        },
                                        {
                                            "amount": 20.51,
                                            "amount2": {
                                                "cash": 20.51
                                            },
                                            "code": "US"
                                        },
                                        {
                                            "amount": 3.54,
                                            "amount2": {
                                                "cash": 3.54
                                            },
                                            "code": "XA"
                                        },
                                        {
                                            "amount": 6.47,
                                            "amount2": {
                                                "cash": 6.47
                                            },
                                            "code": "XY"
                                        },
                                        {
                                            "amount": 6.44,
                                            "amount2": {
                                                "cash": 6.44
                                            },
                                            "code": "YC"
                                        },
                                        {
                                            "amount": 4.16,
                                            "amount2": {
                                                "cash": 4.16
                                            },
                                            "code": "XF"
                                        }
                                    ],
                                    "fuelSurchargeTotalAmount": 1016.01,
                                    "fuelSurchargeTotalAmount2": {
                                        "cash": 1016.01
                                    },
                                    "fuelSurcharges": [
                                        {
                                            "amount": 1016.01,
                                            "amount2": {
                                                "cash": 1016.01
                                            },
                                            "code": "YQ"
                                        }
                                    ]
                                }
                            ],
                            "extraPrices": [
                                {
                                    "currency": "EUR",
                                    "amount": 200,
                                    "amount2": {
                                        "cash": 200
                                    },
                                    "serviceCode": "BIKE"
                                },
                                {
                                    "currency": "EUR",
                                    "amount": 100,
                                    "amount2": {
                                        "cash": 100
                                    },
                                    "serviceCode": "PDBG"
                                }
                            ]
                        }
                    ],
                    "unpaidTotalsPerCurrency": {
                        "EUR": {
                            "currency": "EUR",
                            "airTransportationTotalAmount": 4664.1,
                            "airTransportationNetTotalAmount": 3552,
                            "airTransportationChargesTotalAmount": 4568.01,
                            "taxTotalAmount": 96.09,
                            "fuelSurchargeTotalAmount": 1016.01,
                            "extraTotalAmount": 300,
                            "grandTotalAmount": 4964.1
                        }
                    },
                    "paidTotalsPerCurrency": {}
                }
            }
        },
        "gtm.uniqueEventId": 22
    },
    {
        "ecommerce": null
    },
    {
        "event": "view_item",
        "ecommerce": {
            "products": [
                {
                    "item_name": "MIAMAD",
                    "item_id": "0_0_1__ECONOMY__ECO_LITE_WW_L",
                    "item_price": 214.9,
                    "item_variant": "SEG-UX98-MIA-MAD-2024-03-26T22:45:00",
                    "item_brand": "UX",
                    "item_category": "ECO_LITE_WW_L",
                    "item_category2": "2024-03-26T22:45:00 UX98 OP:UX - 2024-03-27T12:05:00 UX98 OP:UX",
                    "item_category4": 0,
                    "item_category5": "public",
                    "item_list_name": "Retail flights",
                    "index": 0,
                    "quantity": 1
                },
                {
                    "item_name": "MIAMAD",
                    "item_id": "0_0_1__ECONOMY__ECO_STD_WW_L",
                    "item_price": 274.9,
                    "item_variant": "SEG-UX98-MIA-MAD-2024-03-26T22:45:00",
                    "item_brand": "UX",
                    "item_category": "ECO_STD_WW_L",
                    "item_category2": "2024-03-26T22:45:00 UX98 OP:UX - 2024-03-27T12:05:00 UX98 OP:UX",
                    "item_category4": 0,
                    "item_category5": "public",
                    "item_list_name": "Retail flights",
                    "index": 1,
                    "quantity": 1
                },
                {
                    "item_name": "MIAMAD",
                    "item_id": "0_0_1__ECONOMY__ECO_FLEX_WW_L",
                    "item_price": 349.4,
                    "item_variant": "SEG-UX98-MIA-MAD-2024-03-26T22:45:00",
                    "item_brand": "UX",
                    "item_category": "ECO_FLEX_WW_L",
                    "item_category2": "2024-03-26T22:45:00 UX98 OP:UX - 2024-03-27T12:05:00 UX98 OP:UX",
                    "item_category4": 0,
                    "item_category5": "public",
                    "item_list_name": "Retail flights",
                    "index": 2,
                    "quantity": 1
                }
            ]
        },
        "gtm.uniqueEventId": 26
    },
    {
        "ecommerce": null
    },
    {
        "event": "view_item",
        "ecommerce": {
            "products": [
                {
                    "item_name": "MADMIA",
                    "item_id": "1_1_13__ECONOMY__ECO_LITE_WW_L",
                    "item_price": null,
                    "item_variant": "SEG-UX3391,DL1698-MAD-MIA-2024-04-03T10:00:00",
                    "item_brand": "DL,DL",
                    "item_category": "ECO_LITE_WW_L",
                    "item_category2": "2024-04-03T10:00:00 UX3391 OP:DL - 2024-04-03T12:30:00 UX3391 OP:DL,2024-04-04T09:05:00 DL1698 OP:DL - 2024-04-04T12:24:00 DL1698 OP:DL",
                    "item_category4": 1,
                    "item_category5": "public",
                    "item_list_name": "Retail flights",
                    "index": 0,
                    "quantity": 1
                },
                {
                    "item_name": "MADMIA",
                    "item_id": "1_1_13__ECONOMY__ECO_STD_WW_L",
                    "item_price": 1354.79,
                    "item_variant": "SEG-UX3391,DL1698-MAD-MIA-2024-04-03T10:00:00",
                    "item_brand": "DL,DL",
                    "item_category": "ECO_STD_WW_L",
                    "item_category2": "2024-04-03T10:00:00 UX3391 OP:DL - 2024-04-03T12:30:00 UX3391 OP:DL,2024-04-04T09:05:00 DL1698 OP:DL - 2024-04-04T12:24:00 DL1698 OP:DL",
                    "item_category4": 1,
                    "item_category5": "public",
                    "item_list_name": "Retail flights",
                    "index": 1,
                    "quantity": 1
                },
                {
                    "item_name": "MADMIA",
                    "item_id": "1_1_13__ECONOMY__ECO_FLEX_WW_L",
                    "item_price": null,
                    "item_variant": "SEG-UX3391,DL1698-MAD-MIA-2024-04-03T10:00:00",
                    "item_brand": "DL,DL",
                    "item_category": "ECO_FLEX_WW_L",
                    "item_category2": "2024-04-03T10:00:00 UX3391 OP:DL - 2024-04-03T12:30:00 UX3391 OP:DL,2024-04-04T09:05:00 DL1698 OP:DL - 2024-04-04T12:24:00 DL1698 OP:DL",
                    "item_category4": 1,
                    "item_category5": "public",
                    "item_list_name": "Retail flights",
                    "index": 2,
                    "quantity": 1
                }
            ]
        },
        "gtm.uniqueEventId": 40
    },
    {
        "ecommerce": null
    },
    {
        "event": "add_item",
        "ecommerce": {
            "products": [
                {
                    "item_name": "MIAMAD",
                    "item_id": "BND_MIA_MAD_20240326_BUS_FLEX_WW_L",
                    "item_price": null,
                    "item_variant": "SEG-UX98-MIA-MAD-2024-03-26T22:45:00",
                    "item_brand": "UX",
                    "item_category": "BUS_FLEX_WW_L",
                    "item_category2": "2024-03-26T22:45:00 UX98 OP:UX - 2024-03-27T12:05:00 UX98 OP:UX",
                    "item_category4": 0,
                    "item_category5": "public",
                    "item_list_name": "Retail flights",
                    "index": null,
                    "quantity": 1
                },
                {
                    "item_name": "MADMIA",
                    "item_id": "BND_MAD_MIA_20240403_ECO_STD_WW_L",
                    "item_price": null,
                    "item_variant": "SEG-UX3391,DL1698-MAD-MIA-2024-04-03T10:00:00",
                    "item_brand": "DL,DL",
                    "item_category": "ECO_STD_WW_L",
                    "item_category2": "2024-04-03T10:00:00 UX3391 OP:DL - 2024-04-03T12:30:00 UX3391 OP:DL,2024-04-04T09:05:00 DL1698 OP:DL - 2024-04-04T12:24:00 DL1698 OP:DL",
                    "item_category4": 1,
                    "item_category5": "public",
                    "item_list_name": "Retail flights",
                    "index": null,
                    "quantity": 1
                }
            ]
        },
        "gtm.uniqueEventId": 45
    },
    {
        "event": "retail:pageview",
        "retail": {
            "meta": {
                "language": "en-US",
                "sessionId": "BXVOSORTDRONDDVHTPMT"
            },
            "airportCityMap": {
                "JFK": "NYC"
            },
            "airportCountryMap": {
                "MAD": "ES",
                "MIA": "US",
                "NYC": "US",
                "JFK": "US"
            },
            "flightSearch": {
                "origin": "MIA",
                "destination": "MAD",
                "departureDate": "2024-03-26",
                "returnDate": "2024-04-03",
                "tripType": "RoundTrip",
                "passengers": {
                    "numberOfAdults": 1,
                    "numberOfChildren": 0,
                    "numberOfInfants": 0,
                    "numberOfSeniors": 0,
                    "numberOfYouths": 0,
                    "numberOfResidents": 0,
                    "numberOfStudents": 0
                },
                "discounts": {},
                "award": false
            },
            "itinerary": {
                "tripType": "RoundTrip",
                "stopover": false,
                "bounds": [
                    {
                        "id": 0,
                        "itineraryPortionId": "BND_MIA_MAD_20240326",
                        "origin": "MIA",
                        "destination": "MAD",
                        "startDate": "2024-03-26",
                        "sectors": [
                            {
                                "id": 1,
                                "startDate": "2024-03-26T22:45:00",
                                "endDate": "2024-03-27T12:05:00",
                                "originAirport": "MIA",
                                "destinationAirport": "MAD",
                                "elapsedDays": 1,
                                "duration": 500,
                                "segments": [
                                    {
                                        "id": 17,
                                        "itineraryPortionId": "SEG_MIA_MAD_20240326",
                                        "marketingAirlineCode": "UX",
                                        "flightNumber": "98",
                                        "legs": [
                                            {
                                                "id": 17,
                                                "originAirport": "MIA",
                                                "destinationAirport": "MAD",
                                                "startDate": "2024-03-26T22:45:00",
                                                "endDate": "2024-03-27T12:05:00",
                                                "duration": 500,
                                                "aircraftType": "789"
                                            }
                                        ],
                                        "originAirport": "MIA",
                                        "destinationAirport": "MAD",
                                        "arrivalTerminal": "1",
                                        "startDate": "2024-03-26T22:45:00",
                                        "endDate": "2024-03-27T12:05:00",
                                        "elapsedDays": 1,
                                        "duration": 500,
                                        "fareBasisCode": "JYYRAH",
                                        "rbd": "J"
                                    }
                                ],
                                "reference": "0_0_1",
                                "fareFamilyCode": "BUS_FLEX_WW_L",
                                "itineraryPortionId": "SEC_MIA_MAD_20240326"
                            }
                        ],
                        "fareFamilyCode": "BUS_FLEX_WW_L"
                    },
                    {
                        "id": 1,
                        "itineraryPortionId": "BND_MAD_MIA_20240403",
                        "origin": "MAD",
                        "destination": "MIA",
                        "startDate": "2024-04-03",
                        "sectors": [
                            {
                                "id": 13,
                                "startDate": "2024-04-03T10:00:00",
                                "endDate": "2024-04-04T12:24:00",
                                "originAirport": "MAD",
                                "destinationAirport": "MIA",
                                "elapsedDays": 1,
                                "duration": 1944,
                                "segments": [
                                    {
                                        "id": 48,
                                        "itineraryPortionId": "SEG_MAD_JFK_20240403",
                                        "marketingAirlineCode": "UX",
                                        "operatingAirlineCode": "DL",
                                        "flightNumber": "3391",
                                        "legs": [
                                            {
                                                "id": 48,
                                                "originAirport": "MAD",
                                                "destinationAirport": "JFK",
                                                "startDate": "2024-04-03T10:00:00",
                                                "endDate": "2024-04-03T12:30:00",
                                                "duration": 510,
                                                "aircraftType": "764"
                                            }
                                        ],
                                        "originAirport": "MAD",
                                        "destinationAirport": "JFK",
                                        "arrivalTerminal": "4",
                                        "departureTerminal": "1",
                                        "startDate": "2024-04-03T10:00:00",
                                        "endDate": "2024-04-03T12:30:00",
                                        "elapsedDays": 0,
                                        "duration": 510,
                                        "layoverFollowing": {
                                            "startDate": "2024-04-03T12:30:00",
                                            "endDate": "2024-04-04T09:05:00",
                                            "arrivalTerminal": "4",
                                            "departureTerminal": "4",
                                            "arrivalAirport": "JFK",
                                            "departureAirport": "JFK",
                                            "changeOfAirport": false,
                                            "changeOfTerminal": false,
                                            "elapsedDays": 1,
                                            "duration": 1235
                                        },
                                        "fareBasisCode": "MLYRAE",
                                        "rbd": "M"
                                    },
                                    {
                                        "id": 49,
                                        "itineraryPortionId": "SEG_JFK_MIA_20240404",
                                        "marketingAirlineCode": "DL",
                                        "flightNumber": "1698",
                                        "legs": [
                                            {
                                                "id": 49,
                                                "originAirport": "JFK",
                                                "destinationAirport": "MIA",
                                                "startDate": "2024-04-04T09:05:00",
                                                "endDate": "2024-04-04T12:24:00",
                                                "duration": 199,
                                                "aircraftType": "739"
                                            }
                                        ],
                                        "originAirport": "JFK",
                                        "destinationAirport": "MIA",
                                        "departureTerminal": "4",
                                        "startDate": "2024-04-04T09:05:00",
                                        "endDate": "2024-04-04T12:24:00",
                                        "elapsedDays": 0,
                                        "duration": 199,
                                        "fareBasisCode": "MLYRAE",
                                        "rbd": "K"
                                    }
                                ],
                                "reference": "1_1_13",
                                "fareFamilyCode": "ECO_STD_WW_L",
                                "itineraryPortionId": "SEC_MAD_MIA_20240403"
                            }
                        ],
                        "fareFamilyCode": "ECO_STD_WW_L"
                    }
                ]
            },
            "booking": null
        },
        "gtm.uniqueEventId": 51
    },
    {
        "ecommerce": null
    },
    {
        "event": "add_shiping_info",
        "ecommerce": {
            "total_value": null,
            "products": [
                {
                    "item_name": "MIAMAD",
                    "item_id": "BND_MIA_MAD_20240326_BUS_FLEX_WW_L",
                    "item_price": null,
                    "item_variant": "SEG-UX98-MIA-MAD-2024-03-26T22:45:00",
                    "item_brand": "UX",
                    "item_category": "BUS_FLEX_WW_L",
                    "item_category2": "2024-03-26T22:45:00 UX98 OP:UX - 2024-03-27T12:05:00 UX98 OP:UX",
                    "item_category4": 0,
                    "item_category5": "public",
                    "item_list_name": "Retail travelers",
                    "index": null,
                    "quantity": 1
                },
                {
                    "item_name": "MADMIA",
                    "item_id": "BND_MAD_MIA_20240403_ECO_STD_WW_L",
                    "item_price": null,
                    "item_variant": "SEG-UX3391,DL1698-MAD-MIA-2024-04-03T10:00:00",
                    "item_brand": "DL,DL",
                    "item_category": "ECO_STD_WW_L",
                    "item_category2": "2024-04-03T10:00:00 UX3391 OP:DL - 2024-04-03T12:30:00 UX3391 OP:DL,2024-04-04T09:05:00 DL1698 OP:DL - 2024-04-04T12:24:00 DL1698 OP:DL",
                    "item_category4": 1,
                    "item_category5": "public",
                    "item_list_name": "Retail travelers",
                    "index": null,
                    "quantity": 1
                }
            ]
        },
        "gtm.uniqueEventId": 64
    },
    {
        "event": "retail:pageview",
        "retail": {
            "meta": {
                "language": "en-US",
                "sessionId": "BXVOSORTDRONDDVHTPMT"
            },
            "airportCityMap": {
                "JFK": "NYC"
            },
            "airportCountryMap": {
                "MAD": "ES",
                "MIA": "US",
                "NYC": "US",
                "JFK": "US"
            },
            "flightSearch": {
                "origin": "MIA",
                "destination": "MAD",
                "departureDate": "2024-03-26",
                "returnDate": "2024-04-03",
                "tripType": "RoundTrip",
                "passengers": {
                    "numberOfAdults": 1,
                    "numberOfChildren": 0,
                    "numberOfInfants": 0,
                    "numberOfSeniors": 0,
                    "numberOfYouths": 0,
                    "numberOfResidents": 0,
                    "numberOfStudents": 0
                },
                "discounts": {},
                "award": false
            },
            "itinerary": {
                "tripType": "RoundTrip",
                "stopover": false,
                "bounds": [
                    {
                        "id": 0,
                        "itineraryPortionId": "BND_MIA_MAD_20240326",
                        "origin": "MIA",
                        "destination": "MAD",
                        "startDate": "2024-03-26",
                        "sectors": [
                            {
                                "id": 1,
                                "startDate": "2024-03-26T22:45:00",
                                "endDate": "2024-03-27T12:05:00",
                                "originAirport": "MIA",
                                "destinationAirport": "MAD",
                                "elapsedDays": 1,
                                "duration": 500,
                                "segments": [
                                    {
                                        "id": 17,
                                        "itineraryPortionId": "SEG_MIA_MAD_20240326",
                                        "marketingAirlineCode": "UX",
                                        "flightNumber": "98",
                                        "legs": [
                                            {
                                                "id": 17,
                                                "originAirport": "MIA",
                                                "destinationAirport": "MAD",
                                                "startDate": "2024-03-26T22:45:00",
                                                "endDate": "2024-03-27T12:05:00",
                                                "duration": 500,
                                                "aircraftType": "789"
                                            }
                                        ],
                                        "originAirport": "MIA",
                                        "destinationAirport": "MAD",
                                        "arrivalTerminal": "1",
                                        "startDate": "2024-03-26T22:45:00",
                                        "endDate": "2024-03-27T12:05:00",
                                        "elapsedDays": 1,
                                        "duration": 500,
                                        "fareBasisCode": "JYYRAH",
                                        "rbd": "J"
                                    }
                                ],
                                "reference": "0_0_1",
                                "fareFamilyCode": "BUS_FLEX_WW_L",
                                "itineraryPortionId": "SEC_MIA_MAD_20240326"
                            }
                        ],
                        "fareFamilyCode": "BUS_FLEX_WW_L"
                    },
                    {
                        "id": 1,
                        "itineraryPortionId": "BND_MAD_MIA_20240403",
                        "origin": "MAD",
                        "destination": "MIA",
                        "startDate": "2024-04-03",
                        "sectors": [
                            {
                                "id": 13,
                                "startDate": "2024-04-03T10:00:00",
                                "endDate": "2024-04-04T12:24:00",
                                "originAirport": "MAD",
                                "destinationAirport": "MIA",
                                "elapsedDays": 1,
                                "duration": 1944,
                                "segments": [
                                    {
                                        "id": 48,
                                        "itineraryPortionId": "SEG_MAD_JFK_20240403",
                                        "marketingAirlineCode": "UX",
                                        "operatingAirlineCode": "DL",
                                        "flightNumber": "3391",
                                        "legs": [
                                            {
                                                "id": 48,
                                                "originAirport": "MAD",
                                                "destinationAirport": "JFK",
                                                "startDate": "2024-04-03T10:00:00",
                                                "endDate": "2024-04-03T12:30:00",
                                                "duration": 510,
                                                "aircraftType": "764"
                                            }
                                        ],
                                        "originAirport": "MAD",
                                        "destinationAirport": "JFK",
                                        "arrivalTerminal": "4",
                                        "departureTerminal": "1",
                                        "startDate": "2024-04-03T10:00:00",
                                        "endDate": "2024-04-03T12:30:00",
                                        "elapsedDays": 0,
                                        "duration": 510,
                                        "layoverFollowing": {
                                            "startDate": "2024-04-03T12:30:00",
                                            "endDate": "2024-04-04T09:05:00",
                                            "arrivalTerminal": "4",
                                            "departureTerminal": "4",
                                            "arrivalAirport": "JFK",
                                            "departureAirport": "JFK",
                                            "changeOfAirport": false,
                                            "changeOfTerminal": false,
                                            "elapsedDays": 1,
                                            "duration": 1235
                                        },
                                        "fareBasisCode": "MLYRAE",
                                        "rbd": "M"
                                    },
                                    {
                                        "id": 49,
                                        "itineraryPortionId": "SEG_JFK_MIA_20240404",
                                        "marketingAirlineCode": "DL",
                                        "flightNumber": "1698",
                                        "legs": [
                                            {
                                                "id": 49,
                                                "originAirport": "JFK",
                                                "destinationAirport": "MIA",
                                                "startDate": "2024-04-04T09:05:00",
                                                "endDate": "2024-04-04T12:24:00",
                                                "duration": 199,
                                                "aircraftType": "739"
                                            }
                                        ],
                                        "originAirport": "JFK",
                                        "destinationAirport": "MIA",
                                        "departureTerminal": "4",
                                        "startDate": "2024-04-04T09:05:00",
                                        "endDate": "2024-04-04T12:24:00",
                                        "elapsedDays": 0,
                                        "duration": 199,
                                        "fareBasisCode": "MLYRAE",
                                        "rbd": "K"
                                    }
                                ],
                                "reference": "1_1_13",
                                "fareFamilyCode": "ECO_STD_WW_L",
                                "itineraryPortionId": "SEC_MAD_MIA_20240403"
                            }
                        ],
                        "fareFamilyCode": "ECO_STD_WW_L"
                    }
                ]
            },
            "booking": null
        },
        "gtm.uniqueEventId": 65
    },
    {
        "event": "retail:updateCart",
        "retail": {
            "meta": {
                "language": "en-US",
                "sessionId": "BXVOSORTDRONDDVHTPMT"
            },
            "airportCityMap": {
                "JFK": "NYC"
            },
            "airportCountryMap": {
                "MAD": "ES",
                "MIA": "US",
                "NYC": "US",
                "JFK": "US"
            },
            "flightSearch": {
                "origin": "MIA",
                "destination": "MAD",
                "departureDate": "2024-03-26",
                "returnDate": "2024-04-03",
                "tripType": "RoundTrip",
                "passengers": {
                    "numberOfAdults": 1,
                    "numberOfChildren": 0,
                    "numberOfInfants": 0,
                    "numberOfSeniors": 0,
                    "numberOfYouths": 0,
                    "numberOfResidents": 0,
                    "numberOfStudents": 0
                },
                "discounts": {},
                "award": false
            },
            "itinerary": {
                "tripType": "RoundTrip",
                "stopover": false,
                "bounds": [
                    {
                        "id": 0,
                        "itineraryPortionId": "BND_MIA_MAD_20240326",
                        "origin": "MIA",
                        "destination": "MAD",
                        "startDate": "2024-03-26",
                        "sectors": [
                            {
                                "id": 1,
                                "startDate": "2024-03-26T22:45:00",
                                "endDate": "2024-03-27T12:05:00",
                                "originAirport": "MIA",
                                "destinationAirport": "MAD",
                                "elapsedDays": 1,
                                "duration": 500,
                                "segments": [
                                    {
                                        "id": 17,
                                        "itineraryPortionId": "SEG_MIA_MAD_20240326",
                                        "marketingAirlineCode": "UX",
                                        "flightNumber": "98",
                                        "legs": [
                                            {
                                                "id": 17,
                                                "originAirport": "MIA",
                                                "destinationAirport": "MAD",
                                                "startDate": "2024-03-26T22:45:00",
                                                "endDate": "2024-03-27T12:05:00",
                                                "duration": 500,
                                                "aircraftType": "789"
                                            }
                                        ],
                                        "originAirport": "MIA",
                                        "destinationAirport": "MAD",
                                        "arrivalTerminal": "1",
                                        "startDate": "2024-03-26T22:45:00",
                                        "endDate": "2024-03-27T12:05:00",
                                        "elapsedDays": 1,
                                        "duration": 500,
                                        "fareBasisCode": "JYYRAH",
                                        "rbd": "J"
                                    }
                                ],
                                "reference": "0_0_1",
                                "fareFamilyCode": "BUS_FLEX_WW_L",
                                "itineraryPortionId": "SEC_MIA_MAD_20240326"
                            }
                        ],
                        "fareFamilyCode": "BUS_FLEX_WW_L"
                    },
                    {
                        "id": 1,
                        "itineraryPortionId": "BND_MAD_MIA_20240403",
                        "origin": "MAD",
                        "destination": "MIA",
                        "startDate": "2024-04-03",
                        "sectors": [
                            {
                                "id": 13,
                                "startDate": "2024-04-03T10:00:00",
                                "endDate": "2024-04-04T12:24:00",
                                "originAirport": "MAD",
                                "destinationAirport": "MIA",
                                "elapsedDays": 1,
                                "duration": 1944,
                                "segments": [
                                    {
                                        "id": 48,
                                        "itineraryPortionId": "SEG_MAD_JFK_20240403",
                                        "marketingAirlineCode": "UX",
                                        "operatingAirlineCode": "DL",
                                        "flightNumber": "3391",
                                        "legs": [
                                            {
                                                "id": 48,
                                                "originAirport": "MAD",
                                                "destinationAirport": "JFK",
                                                "startDate": "2024-04-03T10:00:00",
                                                "endDate": "2024-04-03T12:30:00",
                                                "duration": 510,
                                                "aircraftType": "764"
                                            }
                                        ],
                                        "originAirport": "MAD",
                                        "destinationAirport": "JFK",
                                        "arrivalTerminal": "4",
                                        "departureTerminal": "1",
                                        "startDate": "2024-04-03T10:00:00",
                                        "endDate": "2024-04-03T12:30:00",
                                        "elapsedDays": 0,
                                        "duration": 510,
                                        "layoverFollowing": {
                                            "startDate": "2024-04-03T12:30:00",
                                            "endDate": "2024-04-04T09:05:00",
                                            "arrivalTerminal": "4",
                                            "departureTerminal": "4",
                                            "arrivalAirport": "JFK",
                                            "departureAirport": "JFK",
                                            "changeOfAirport": false,
                                            "changeOfTerminal": false,
                                            "elapsedDays": 1,
                                            "duration": 1235
                                        },
                                        "fareBasisCode": "MLYRAE",
                                        "rbd": "M"
                                    },
                                    {
                                        "id": 49,
                                        "itineraryPortionId": "SEG_JFK_MIA_20240404",
                                        "marketingAirlineCode": "DL",
                                        "flightNumber": "1698",
                                        "legs": [
                                            {
                                                "id": 49,
                                                "originAirport": "JFK",
                                                "destinationAirport": "MIA",
                                                "startDate": "2024-04-04T09:05:00",
                                                "endDate": "2024-04-04T12:24:00",
                                                "duration": 199,
                                                "aircraftType": "739"
                                            }
                                        ],
                                        "originAirport": "JFK",
                                        "destinationAirport": "MIA",
                                        "departureTerminal": "4",
                                        "startDate": "2024-04-04T09:05:00",
                                        "endDate": "2024-04-04T12:24:00",
                                        "elapsedDays": 0,
                                        "duration": 199,
                                        "fareBasisCode": "MLYRAE",
                                        "rbd": "K"
                                    }
                                ],
                                "reference": "1_1_13",
                                "fareFamilyCode": "ECO_STD_WW_L",
                                "itineraryPortionId": "SEC_MAD_MIA_20240403"
                            }
                        ],
                        "fareFamilyCode": "ECO_STD_WW_L"
                    }
                ]
            },
            "booking": {
                "messages": [],
                "dictionary": {
                    "airports": {
                        "MAD": {
                            "name": "Madrid Barajas",
                            "cityCode": "MAD",
                            "countryCode": "ES"
                        },
                        "MIA": {
                            "name": "Miami International",
                            "cityCode": "MIA",
                            "countryCode": "US"
                        },
                        "JFK": {
                            "name": "John F Kennedy",
                            "cityCode": "NYC",
                            "countryCode": "US"
                        }
                    },
                    "cities": {
                        "MAD": {
                            "name": "Madrid",
                            "countryCode": "ES"
                        },
                        "MIA": {
                            "name": "Miami",
                            "countryCode": "US"
                        },
                        "NYC": {
                            "name": "New York",
                            "countryCode": "US"
                        }
                    },
                    "municipalities": {}
                },
                "bookingId": "f0eff70c-390d-4976-b4bf-2e330dd427a8",
                "externalBooking": false,
                "recordLocator": "OU69S2",
                "bookingStatus": "PRE_BOOKED",
                "ticketStatus": "XL",
                "purchasedDate": "2024-02-05",
                "itinerary": {
                    "id": "ITY_MIA_MAD_20240326",
                    "tripType": "RoundTrip",
                    "stopover": false,
                    "bounds": [
                        {
                            "id": "BND_MIA_MAD_20240326",
                            "originAirport": "MIA",
                            "destinationAirport": "MAD",
                            "originCity": "MIA",
                            "destinationCity": "MAD",
                            "startDate": "2024-03-26T22:45:00",
                            "endDate": "2024-03-27T12:05:00",
                            "fareFamilyCode": "BUS_FLEX_WW_L",
                            "sectors": [
                                {
                                    "id": "SEC_MIA_MAD_20240326",
                                    "originAirport": "MIA",
                                    "destinationAirport": "MAD",
                                    "startDate": "2024-03-26T22:45:00",
                                    "endDate": "2024-03-27T12:05:00",
                                    "elapsedDays": 1,
                                    "duration": 500,
                                    "fareFamilyCode": "BUS_FLEX_WW_L",
                                    "segments": [
                                        {
                                            "id": "SEG_MIA_MAD_20240326",
                                            "originAirport": "MIA",
                                            "destinationAirport": "MAD",
                                            "marketingAirlineCode": "UX",
                                            "flightNumber": "98",
                                            "startDate": "2024-03-26T22:45:00",
                                            "endDate": "2024-03-27T12:05:00",
                                            "elapsedDays": 1,
                                            "duration": 500,
                                            "arrivalTerminal": "1",
                                            "legs": [
                                                {
                                                    "id": "SEG_MIA_MAD_20240326",
                                                    "originAirport": "MIA",
                                                    "destinationAirport": "MAD",
                                                    "arrivalTerminal": "1",
                                                    "startDate": "2024-03-26T22:45:00",
                                                    "endDate": "2024-03-27T12:05:00",
                                                    "elapsedDays": 1,
                                                    "duration": 500,
                                                    "aircraftType": "789"
                                                }
                                            ],
                                            "rbd": "J",
                                            "cabinCode": "Economy",
                                            "fareBasisCode": "JYYRAH"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "BND_MAD_MIA_20240403",
                            "originAirport": "MAD",
                            "destinationAirport": "MIA",
                            "originCity": "MAD",
                            "destinationCity": "MIA",
                            "startDate": "2024-04-03T10:00:00",
                            "endDate": "2024-04-04T12:24:00",
                            "fareFamilyCode": "ECO_STD_WW_L",
                            "sectors": [
                                {
                                    "id": "SEC_MAD_MIA_20240403",
                                    "originAirport": "MAD",
                                    "destinationAirport": "MIA",
                                    "startDate": "2024-04-03T10:00:00",
                                    "endDate": "2024-04-04T12:24:00",
                                    "elapsedDays": 1,
                                    "duration": 1944,
                                    "fareFamilyCode": "ECO_STD_WW_L",
                                    "segments": [
                                        {
                                            "id": "SEG_MAD_JFK_20240403",
                                            "originAirport": "MAD",
                                            "destinationAirport": "JFK",
                                            "marketingAirlineCode": "UX",
                                            "operatingAirlineCode": "DL",
                                            "flightNumber": "3391",
                                            "startDate": "2024-04-03T10:00:00",
                                            "endDate": "2024-04-03T12:30:00",
                                            "elapsedDays": 0,
                                            "duration": 510,
                                            "departureTerminal": "1",
                                            "arrivalTerminal": "4",
                                            "legs": [
                                                {
                                                    "id": "SEG_MAD_JFK_20240403",
                                                    "originAirport": "MAD",
                                                    "destinationAirport": "JFK",
                                                    "arrivalTerminal": "4",
                                                    "departureTerminal": "1",
                                                    "startDate": "2024-04-03T10:00:00",
                                                    "endDate": "2024-04-03T12:30:00",
                                                    "elapsedDays": 0,
                                                    "duration": 510,
                                                    "aircraftType": "764"
                                                }
                                            ],
                                            "layoverFollowing": {
                                                "startDate": "2024-04-03T12:30:00",
                                                "endDate": "2024-04-04T09:05:00",
                                                "arrivalTerminal": "4",
                                                "departureTerminal": "4",
                                                "changeOfAirport": false,
                                                "changeOfTerminal": false,
                                                "elapsedDays": 1,
                                                "duration": 1235
                                            },
                                            "rbd": "M",
                                            "cabinCode": "Economy",
                                            "fareBasisCode": "MLYRAE"
                                        },
                                        {
                                            "id": "SEG_JFK_MIA_20240404",
                                            "originAirport": "JFK",
                                            "destinationAirport": "MIA",
                                            "marketingAirlineCode": "DL",
                                            "flightNumber": "1698",
                                            "startDate": "2024-04-04T09:05:00",
                                            "endDate": "2024-04-04T12:24:00",
                                            "elapsedDays": 0,
                                            "duration": 199,
                                            "departureTerminal": "4",
                                            "legs": [
                                                {
                                                    "id": "SEG_JFK_MIA_20240404",
                                                    "originAirport": "JFK",
                                                    "destinationAirport": "MIA",
                                                    "departureTerminal": "4",
                                                    "startDate": "2024-04-04T09:05:00",
                                                    "endDate": "2024-04-04T12:24:00",
                                                    "elapsedDays": 0,
                                                    "duration": 199,
                                                    "aircraftType": "739"
                                                }
                                            ],
                                            "rbd": "K",
                                            "cabinCode": "Economy",
                                            "fareBasisCode": "MLYRAE"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                "contactDetails": {
                    "email": "kwarzel@pros.com",
                    "notificationNumber": {
                        "prefix": "+1",
                        "number": "3053056064"
                    }
                },
                "passengerDictionary": {
                    "1": {
                        "id": 1,
                        "gender": "FEMALE",
                        "type": "ADT",
                        "firstName": "Katharina",
                        "salutation": "MRS",
                        "lastName": "Warzel",
                        "dateOfBirth": "1990-03-26",
                        "travelDocument": {
                            "type": "P",
                            "number": "C4FX5VP2F",
                            "issueCountry": "DE",
                            "nationality": "DE",
                            "expirationDate": "2026-11-14"
                        },
                        "visaList": [],
                        "frequentFlyerProgram": "DL",
                        "frequentFlyerNumber": "9465866359"
                    }
                },
                "totalNumberOfPassengers": 1,
                "itineraryPortionDictionary": {
                    "BND_MAD_MIA_20240403": {
                        "id": "BND_MAD_MIA_20240403",
                        "level": "bound",
                        "originAirport": "MAD",
                        "destinationAirport": "MIA",
                        "startDate": "2024-04-03T10:00:00",
                        "endDate": "2024-04-04T12:24:00"
                    },
                    "SEC_MIA_MAD_20240326": {
                        "id": "SEC_MIA_MAD_20240326",
                        "level": "sector",
                        "originAirport": "MIA",
                        "destinationAirport": "MAD",
                        "startDate": "2024-03-26T22:45:00",
                        "endDate": "2024-03-27T12:05:00"
                    },
                    "ITY_MIA_MAD_20240326": {
                        "id": "ITY_MIA_MAD_20240326",
                        "level": "itinerary",
                        "originAirport": "MIA",
                        "destinationAirport": "MAD",
                        "startDate": "2024-03-26T22:45:00",
                        "endDate": "2024-04-04T09:05:00"
                    },
                    "BND_MIA_MAD_20240326": {
                        "id": "BND_MIA_MAD_20240326",
                        "level": "bound",
                        "originAirport": "MIA",
                        "destinationAirport": "MAD",
                        "startDate": "2024-03-26T22:45:00",
                        "endDate": "2024-03-27T12:05:00"
                    },
                    "SEC_MAD_MIA_20240403": {
                        "id": "SEC_MAD_MIA_20240403",
                        "level": "sector",
                        "originAirport": "MAD",
                        "destinationAirport": "MIA",
                        "startDate": "2024-04-03T10:00:00",
                        "endDate": "2024-04-04T12:24:00"
                    },
                    "SEG_MAD_JFK_20240403": {
                        "id": "SEG_MAD_JFK_20240403",
                        "level": "segment",
                        "originAirport": "MAD",
                        "destinationAirport": "JFK",
                        "startDate": "2024-04-03T10:00:00",
                        "endDate": "2024-04-03T12:30:00"
                    },
                    "SEG_MIA_MAD_20240326": {
                        "id": "SEG_MIA_MAD_20240326",
                        "level": "segment",
                        "originAirport": "MIA",
                        "destinationAirport": "MAD",
                        "startDate": "2024-03-26T22:45:00",
                        "endDate": "2024-03-27T12:05:00"
                    },
                    "SEG_JFK_MIA_20240404": {
                        "id": "SEG_JFK_MIA_20240404",
                        "level": "segment",
                        "originAirport": "JFK",
                        "destinationAirport": "MIA",
                        "startDate": "2024-04-04T09:05:00",
                        "endDate": "2024-04-04T12:24:00"
                    }
                },
                "passengersServices": [
                    {
                        "passengerId": 1,
                        "isInfant": false,
                        "serviceItineraryPortions": [
                            {
                                "itineraryPortionId": "SEG_MIA_MAD_20240326",
                                "serviceCategories": []
                            },
                            {
                                "itineraryPortionId": "SEG_MAD_JFK_20240403",
                                "serviceCategories": []
                            },
                            {
                                "itineraryPortionId": "SEG_JFK_MIA_20240404",
                                "serviceCategories": []
                            }
                        ]
                    }
                ],
                "passengersBaggageAllowance": [
                    {
                        "passengerId": 1,
                        "isInfant": false,
                        "baggageItineraryPortions": [
                            {
                                "itineraryPortionId": "BND_MIA_MAD_20240326",
                                "baggageAllowance": {
                                    "checkedBaggage": {
                                        "numberOfPieces": 2,
                                        "pieceOrWeightAllowance": "PIECE",
                                        "baggageCharacteristics": {
                                            "weightKg": 32,
                                            "weightLbs": 70,
                                            "dimensionsTotalCm": 158,
                                            "dimensionsTotalIn": 62
                                        }
                                    }
                                }
                            },
                            {
                                "itineraryPortionId": "BND_MAD_MIA_20240403",
                                "baggageAllowance": {
                                    "checkedBaggage": {
                                        "numberOfPieces": 1,
                                        "pieceOrWeightAllowance": "PIECE",
                                        "baggageCharacteristics": {
                                            "weightKg": 23,
                                            "weightLbs": 50,
                                            "dimensionsTotalCm": 158,
                                            "dimensionsTotalIn": 62
                                        }
                                    }
                                }
                            }
                        ]
                    }
                ],
                "passengersSpecialAssistance": [],
                "customizable": true,
                "customization": {
                    "customizationOfServices": true,
                    "modificationOfPassengers": false
                },
                "bookingCompletionStep": "PAYMENT",
                "servicesToBook": [],
                "prices": {
                    "passengersPrices": [
                        {
                            "passengerId": 1,
                            "infantPrices": false,
                            "airTransportationPrices": [
                                {
                                    "currency": "EUR",
                                    "airTransportationTotalAmount": 4664.1,
                                    "airTransportationTotalAmount2": {
                                        "cash": 4664.1
                                    },
                                    "airTransportationNetAmount": 3552,
                                    "airTransportationNetAmount2": {
                                        "cash": 3552
                                    },
                                    "airTransportationChargesAmount": 4568.01,
                                    "airTransportationChargesAmount2": {
                                        "cash": 4568.01
                                    },
                                    "taxTotalAmount": 96.09,
                                    "taxTotalAmount2": {
                                        "cash": 96.09
                                    },
                                    "taxes": [
                                        {
                                            "amount": 20.2,
                                            "amount2": {
                                                "cash": 20.2
                                            },
                                            "code": "JD"
                                        },
                                        {
                                            "amount": 0.63,
                                            "amount2": {
                                                "cash": 0.63
                                            },
                                            "code": "OG"
                                        },
                                        {
                                            "amount": 3.27,
                                            "amount2": {
                                                "cash": 3.27
                                            },
                                            "code": "QV"
                                        },
                                        {
                                            "amount": 10.36,
                                            "amount2": {
                                                "cash": 10.36
                                            },
                                            "code": "AY"
                                        },
                                        {
                                            "amount": 20.51,
                                            "amount2": {
                                                "cash": 20.51
                                            },
                                            "code": "US"
                                        },
                                        {
                                            "amount": 20.51,
                                            "amount2": {
                                                "cash": 20.51
                                            },
                                            "code": "US"
                                        },
                                        {
                                            "amount": 3.54,
                                            "amount2": {
                                                "cash": 3.54
                                            },
                                            "code": "XA"
                                        },
                                        {
                                            "amount": 6.47,
                                            "amount2": {
                                                "cash": 6.47
                                            },
                                            "code": "XY"
                                        },
                                        {
                                            "amount": 6.44,
                                            "amount2": {
                                                "cash": 6.44
                                            },
                                            "code": "YC"
                                        },
                                        {
                                            "amount": 4.16,
                                            "amount2": {
                                                "cash": 4.16
                                            },
                                            "code": "XF"
                                        }
                                    ],
                                    "fuelSurchargeTotalAmount": 1016.01,
                                    "fuelSurchargeTotalAmount2": {
                                        "cash": 1016.01
                                    },
                                    "fuelSurcharges": [
                                        {
                                            "amount": 1016.01,
                                            "amount2": {
                                                "cash": 1016.01
                                            },
                                            "code": "YQ"
                                        }
                                    ]
                                }
                            ],
                            "extraPrices": []
                        }
                    ],
                    "unpaidTotalsPerCurrency": {
                        "EUR": {
                            "currency": "EUR",
                            "airTransportationTotalAmount": 4664.1,
                            "airTransportationNetTotalAmount": 3552,
                            "airTransportationChargesTotalAmount": 4568.01,
                            "taxTotalAmount": 96.09,
                            "fuelSurchargeTotalAmount": 1016.01,
                            "grandTotalAmount": 4664.1
                        }
                    },
                    "paidTotalsPerCurrency": {}
                }
            }
        },
        "gtm.uniqueEventId": 68
    },
    {
        "ecommerce": null
    },
    {
        "event": "add_to_cart",
        "ecommerce": {
            "products": [
                {
                    "item_name": "SEAT",
                    "item_id": "SEG_MIA_MAD_20240326_SEAT_1_SEAT",
                    "item_price": null,
                    "item_brand": "Air Europa",
                    "item_category": "SEG_MIA_MAD_20240326",
                    "item_category2": "3G",
                    "item_category3": null,
                    "item_category4": null,
                    "item_category5": [
                        "SEG_MIA_MAD_20240326"
                    ],
                    "item_list_name": "AncillaryService",
                    "index": 0,
                    "quantity": 1
                }
            ]
        },
        "gtm.uniqueEventId": 74
    },
    {
        "event": "retail:pageview",
        "retail": {
            "meta": {
                "language": "en-US",
                "sessionId": "BXVOSORTDRONDDVHTPMT"
            },
            "airportCityMap": {
                "JFK": "NYC"
            },
            "airportCountryMap": {
                "MAD": "ES",
                "MIA": "US",
                "NYC": "US",
                "JFK": "US"
            },
            "flightSearch": {
                "origin": "MIA",
                "destination": "MAD",
                "departureDate": "2024-03-26",
                "returnDate": "2024-04-03",
                "tripType": "RoundTrip",
                "passengers": {
                    "numberOfAdults": 1,
                    "numberOfChildren": 0,
                    "numberOfInfants": 0,
                    "numberOfSeniors": 0,
                    "numberOfYouths": 0,
                    "numberOfResidents": 0,
                    "numberOfStudents": 0
                },
                "discounts": {},
                "award": false
            },
            "itinerary": {
                "bounds": [
                    {
                        "id": "BND_MIA_MAD_20240326",
                        "itineraryPortionId": "BND_MIA_MAD_20240326",
                        "origin": "MIA",
                        "destination": "MAD",
                        "originAirport": "MIA",
                        "destinationAirport": "MAD",
                        "sectors": [
                            {
                                "id": "SEC_MIA_MAD_20240326",
                                "originAirport": "MIA",
                                "destinationAirport": "MAD",
                                "startDate": "2024-03-26T22:45:00",
                                "endDate": "2024-03-27T12:05:00",
                                "elapsedDays": 1,
                                "duration": 500,
                                "fareFamilyCode": "BUS_FLEX_WW_L",
                                "segments": [
                                    {
                                        "id": "SEG_MIA_MAD_20240326",
                                        "originAirport": "MIA",
                                        "destinationAirport": "MAD",
                                        "marketingAirlineCode": "UX",
                                        "flightNumber": "98",
                                        "startDate": "2024-03-26T22:45:00",
                                        "endDate": "2024-03-27T12:05:00",
                                        "elapsedDays": 1,
                                        "duration": 500,
                                        "arrivalTerminal": "1",
                                        "legs": [
                                            {
                                                "id": "SEG_MIA_MAD_20240326",
                                                "originAirport": "MIA",
                                                "destinationAirport": "MAD",
                                                "arrivalTerminal": "1",
                                                "startDate": "2024-03-26T22:45:00",
                                                "endDate": "2024-03-27T12:05:00",
                                                "elapsedDays": 1,
                                                "duration": 500,
                                                "aircraftType": "789",
                                                "itineraryPortionId": "SEG_MIA_MAD_20240326"
                                            }
                                        ],
                                        "rbd": "J",
                                        "cabinCode": "Economy",
                                        "fareBasisCode": "JYYRAH",
                                        "itineraryPortionId": "SEG_MIA_MAD_20240326"
                                    }
                                ],
                                "itineraryPortionId": "SEC_MIA_MAD_20240326"
                            }
                        ],
                        "startDate": "2024-03-26T22:45:00",
                        "endDate": "2024-03-27T12:05:00",
                        "fareFamilyCode": "BUS_FLEX_WW_L"
                    },
                    {
                        "id": "BND_MAD_MIA_20240403",
                        "itineraryPortionId": "BND_MAD_MIA_20240403",
                        "origin": "MAD",
                        "destination": "MIA",
                        "originAirport": "MAD",
                        "destinationAirport": "MIA",
                        "sectors": [
                            {
                                "id": "SEC_MAD_MIA_20240403",
                                "originAirport": "MAD",
                                "destinationAirport": "MIA",
                                "startDate": "2024-04-03T10:00:00",
                                "endDate": "2024-04-04T12:24:00",
                                "elapsedDays": 1,
                                "duration": 1944,
                                "fareFamilyCode": "ECO_STD_WW_L",
                                "segments": [
                                    {
                                        "id": "SEG_MAD_JFK_20240403",
                                        "originAirport": "MAD",
                                        "destinationAirport": "JFK",
                                        "marketingAirlineCode": "UX",
                                        "operatingAirlineCode": "DL",
                                        "flightNumber": "3391",
                                        "startDate": "2024-04-03T10:00:00",
                                        "endDate": "2024-04-03T12:30:00",
                                        "elapsedDays": 0,
                                        "duration": 510,
                                        "departureTerminal": "1",
                                        "arrivalTerminal": "4",
                                        "legs": [
                                            {
                                                "id": "SEG_MAD_JFK_20240403",
                                                "originAirport": "MAD",
                                                "destinationAirport": "JFK",
                                                "arrivalTerminal": "4",
                                                "departureTerminal": "1",
                                                "startDate": "2024-04-03T10:00:00",
                                                "endDate": "2024-04-03T12:30:00",
                                                "elapsedDays": 0,
                                                "duration": 510,
                                                "aircraftType": "764",
                                                "itineraryPortionId": "SEG_MAD_JFK_20240403"
                                            }
                                        ],
                                        "layoverFollowing": {
                                            "startDate": "2024-04-03T12:30:00",
                                            "endDate": "2024-04-04T09:05:00",
                                            "arrivalTerminal": "4",
                                            "departureTerminal": "4",
                                            "changeOfAirport": false,
                                            "changeOfTerminal": false,
                                            "elapsedDays": 1,
                                            "duration": 1235
                                        },
                                        "rbd": "M",
                                        "cabinCode": "Economy",
                                        "fareBasisCode": "MLYRAE",
                                        "itineraryPortionId": "SEG_MAD_JFK_20240403"
                                    },
                                    {
                                        "id": "SEG_JFK_MIA_20240404",
                                        "originAirport": "JFK",
                                        "destinationAirport": "MIA",
                                        "marketingAirlineCode": "DL",
                                        "flightNumber": "1698",
                                        "startDate": "2024-04-04T09:05:00",
                                        "endDate": "2024-04-04T12:24:00",
                                        "elapsedDays": 0,
                                        "duration": 199,
                                        "departureTerminal": "4",
                                        "legs": [
                                            {
                                                "id": "SEG_JFK_MIA_20240404",
                                                "originAirport": "JFK",
                                                "destinationAirport": "MIA",
                                                "departureTerminal": "4",
                                                "startDate": "2024-04-04T09:05:00",
                                                "endDate": "2024-04-04T12:24:00",
                                                "elapsedDays": 0,
                                                "duration": 199,
                                                "aircraftType": "739",
                                                "itineraryPortionId": "SEG_JFK_MIA_20240404"
                                            }
                                        ],
                                        "rbd": "K",
                                        "cabinCode": "Economy",
                                        "fareBasisCode": "MLYRAE",
                                        "itineraryPortionId": "SEG_JFK_MIA_20240404"
                                    }
                                ],
                                "itineraryPortionId": "SEC_MAD_MIA_20240403"
                            }
                        ],
                        "startDate": "2024-04-03T10:00:00",
                        "endDate": "2024-04-04T12:24:00",
                        "fareFamilyCode": "ECO_STD_WW_L"
                    }
                ],
                "itineraryPortionId": "ITY_MIA_MAD_20240326",
                "tripType": "RoundTrip",
                "stopover": false
            },
            "booking": {
                "messages": [],
                "dictionary": {
                    "airports": {
                        "MAD": {
                            "name": "Madrid Barajas",
                            "cityCode": "MAD",
                            "countryCode": "ES"
                        },
                        "MIA": {
                            "name": "Miami International",
                            "cityCode": "MIA",
                            "countryCode": "US"
                        },
                        "JFK": {
                            "name": "John F Kennedy",
                            "cityCode": "NYC",
                            "countryCode": "US"
                        }
                    },
                    "cities": {
                        "MAD": {
                            "name": "Madrid",
                            "countryCode": "ES"
                        },
                        "MIA": {
                            "name": "Miami",
                            "countryCode": "US"
                        },
                        "NYC": {
                            "name": "New York",
                            "countryCode": "US"
                        }
                    },
                    "municipalities": {}
                },
                "bookingId": "f0eff70c-390d-4976-b4bf-2e330dd427a8",
                "externalBooking": false,
                "recordLocator": "OU69S2",
                "bookingStatus": "PRE_BOOKED",
                "ticketStatus": "XL",
                "purchasedDate": "2024-02-05",
                "itinerary": {
                    "id": "ITY_MIA_MAD_20240326",
                    "tripType": "RoundTrip",
                    "stopover": false,
                    "bounds": [
                        {
                            "id": "BND_MIA_MAD_20240326",
                            "originAirport": "MIA",
                            "destinationAirport": "MAD",
                            "originCity": "MIA",
                            "destinationCity": "MAD",
                            "startDate": "2024-03-26T22:45:00",
                            "endDate": "2024-03-27T12:05:00",
                            "fareFamilyCode": "BUS_FLEX_WW_L",
                            "sectors": [
                                {
                                    "id": "SEC_MIA_MAD_20240326",
                                    "originAirport": "MIA",
                                    "destinationAirport": "MAD",
                                    "startDate": "2024-03-26T22:45:00",
                                    "endDate": "2024-03-27T12:05:00",
                                    "elapsedDays": 1,
                                    "duration": 500,
                                    "fareFamilyCode": "BUS_FLEX_WW_L",
                                    "segments": [
                                        {
                                            "id": "SEG_MIA_MAD_20240326",
                                            "originAirport": "MIA",
                                            "destinationAirport": "MAD",
                                            "marketingAirlineCode": "UX",
                                            "flightNumber": "98",
                                            "startDate": "2024-03-26T22:45:00",
                                            "endDate": "2024-03-27T12:05:00",
                                            "elapsedDays": 1,
                                            "duration": 500,
                                            "arrivalTerminal": "1",
                                            "legs": [
                                                {
                                                    "id": "SEG_MIA_MAD_20240326",
                                                    "originAirport": "MIA",
                                                    "destinationAirport": "MAD",
                                                    "arrivalTerminal": "1",
                                                    "startDate": "2024-03-26T22:45:00",
                                                    "endDate": "2024-03-27T12:05:00",
                                                    "elapsedDays": 1,
                                                    "duration": 500,
                                                    "aircraftType": "789"
                                                }
                                            ],
                                            "rbd": "J",
                                            "cabinCode": "Economy",
                                            "fareBasisCode": "JYYRAH"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "BND_MAD_MIA_20240403",
                            "originAirport": "MAD",
                            "destinationAirport": "MIA",
                            "originCity": "MAD",
                            "destinationCity": "MIA",
                            "startDate": "2024-04-03T10:00:00",
                            "endDate": "2024-04-04T12:24:00",
                            "fareFamilyCode": "ECO_STD_WW_L",
                            "sectors": [
                                {
                                    "id": "SEC_MAD_MIA_20240403",
                                    "originAirport": "MAD",
                                    "destinationAirport": "MIA",
                                    "startDate": "2024-04-03T10:00:00",
                                    "endDate": "2024-04-04T12:24:00",
                                    "elapsedDays": 1,
                                    "duration": 1944,
                                    "fareFamilyCode": "ECO_STD_WW_L",
                                    "segments": [
                                        {
                                            "id": "SEG_MAD_JFK_20240403",
                                            "originAirport": "MAD",
                                            "destinationAirport": "JFK",
                                            "marketingAirlineCode": "UX",
                                            "operatingAirlineCode": "DL",
                                            "flightNumber": "3391",
                                            "startDate": "2024-04-03T10:00:00",
                                            "endDate": "2024-04-03T12:30:00",
                                            "elapsedDays": 0,
                                            "duration": 510,
                                            "departureTerminal": "1",
                                            "arrivalTerminal": "4",
                                            "legs": [
                                                {
                                                    "id": "SEG_MAD_JFK_20240403",
                                                    "originAirport": "MAD",
                                                    "destinationAirport": "JFK",
                                                    "arrivalTerminal": "4",
                                                    "departureTerminal": "1",
                                                    "startDate": "2024-04-03T10:00:00",
                                                    "endDate": "2024-04-03T12:30:00",
                                                    "elapsedDays": 0,
                                                    "duration": 510,
                                                    "aircraftType": "764"
                                                }
                                            ],
                                            "layoverFollowing": {
                                                "startDate": "2024-04-03T12:30:00",
                                                "endDate": "2024-04-04T09:05:00",
                                                "arrivalTerminal": "4",
                                                "departureTerminal": "4",
                                                "changeOfAirport": false,
                                                "changeOfTerminal": false,
                                                "elapsedDays": 1,
                                                "duration": 1235
                                            },
                                            "rbd": "M",
                                            "cabinCode": "Economy",
                                            "fareBasisCode": "MLYRAE"
                                        },
                                        {
                                            "id": "SEG_JFK_MIA_20240404",
                                            "originAirport": "JFK",
                                            "destinationAirport": "MIA",
                                            "marketingAirlineCode": "DL",
                                            "flightNumber": "1698",
                                            "startDate": "2024-04-04T09:05:00",
                                            "endDate": "2024-04-04T12:24:00",
                                            "elapsedDays": 0,
                                            "duration": 199,
                                            "departureTerminal": "4",
                                            "legs": [
                                                {
                                                    "id": "SEG_JFK_MIA_20240404",
                                                    "originAirport": "JFK",
                                                    "destinationAirport": "MIA",
                                                    "departureTerminal": "4",
                                                    "startDate": "2024-04-04T09:05:00",
                                                    "endDate": "2024-04-04T12:24:00",
                                                    "elapsedDays": 0,
                                                    "duration": 199,
                                                    "aircraftType": "739"
                                                }
                                            ],
                                            "rbd": "K",
                                            "cabinCode": "Economy",
                                            "fareBasisCode": "MLYRAE"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                "contactDetails": {
                    "email": "kwarzel@pros.com",
                    "notificationNumber": {
                        "prefix": "+1",
                        "number": "3053056064"
                    }
                },
                "passengerDictionary": {
                    "1": {
                        "id": 1,
                        "gender": "FEMALE",
                        "type": "ADT",
                        "firstName": "Katharina",
                        "salutation": "MRS",
                        "lastName": "Warzel",
                        "dateOfBirth": "1990-03-26",
                        "travelDocument": {
                            "type": "P",
                            "number": "C4FX5VP2F",
                            "issueCountry": "DE",
                            "nationality": "DE",
                            "expirationDate": "2026-11-14"
                        },
                        "visaList": [],
                        "frequentFlyerProgram": "DL",
                        "frequentFlyerNumber": "9465866359"
                    }
                },
                "totalNumberOfPassengers": 1,
                "itineraryPortionDictionary": {
                    "BND_MAD_MIA_20240403": {
                        "id": "BND_MAD_MIA_20240403",
                        "level": "bound",
                        "originAirport": "MAD",
                        "destinationAirport": "MIA",
                        "startDate": "2024-04-03T10:00:00",
                        "endDate": "2024-04-04T12:24:00"
                    },
                    "SEC_MIA_MAD_20240326": {
                        "id": "SEC_MIA_MAD_20240326",
                        "level": "sector",
                        "originAirport": "MIA",
                        "destinationAirport": "MAD",
                        "startDate": "2024-03-26T22:45:00",
                        "endDate": "2024-03-27T12:05:00"
                    },
                    "ITY_MIA_MAD_20240326": {
                        "id": "ITY_MIA_MAD_20240326",
                        "level": "itinerary",
                        "originAirport": "MIA",
                        "destinationAirport": "MAD",
                        "startDate": "2024-03-26T22:45:00",
                        "endDate": "2024-04-04T09:05:00"
                    },
                    "BND_MIA_MAD_20240326": {
                        "id": "BND_MIA_MAD_20240326",
                        "level": "bound",
                        "originAirport": "MIA",
                        "destinationAirport": "MAD",
                        "startDate": "2024-03-26T22:45:00",
                        "endDate": "2024-03-27T12:05:00"
                    },
                    "SEC_MAD_MIA_20240403": {
                        "id": "SEC_MAD_MIA_20240403",
                        "level": "sector",
                        "originAirport": "MAD",
                        "destinationAirport": "MIA",
                        "startDate": "2024-04-03T10:00:00",
                        "endDate": "2024-04-04T12:24:00"
                    },
                    "SEG_MAD_JFK_20240403": {
                        "id": "SEG_MAD_JFK_20240403",
                        "level": "segment",
                        "originAirport": "MAD",
                        "destinationAirport": "JFK",
                        "startDate": "2024-04-03T10:00:00",
                        "endDate": "2024-04-03T12:30:00"
                    },
                    "SEG_MIA_MAD_20240326": {
                        "id": "SEG_MIA_MAD_20240326",
                        "level": "segment",
                        "originAirport": "MIA",
                        "destinationAirport": "MAD",
                        "startDate": "2024-03-26T22:45:00",
                        "endDate": "2024-03-27T12:05:00"
                    },
                    "SEG_JFK_MIA_20240404": {
                        "id": "SEG_JFK_MIA_20240404",
                        "level": "segment",
                        "originAirport": "JFK",
                        "destinationAirport": "MIA",
                        "startDate": "2024-04-04T09:05:00",
                        "endDate": "2024-04-04T12:24:00"
                    }
                },
                "passengersServices": [
                    {
                        "passengerId": 1,
                        "isInfant": false,
                        "serviceItineraryPortions": [
                            {
                                "itineraryPortionId": "SEG_MIA_MAD_20240326",
                                "serviceCategories": []
                            },
                            {
                                "itineraryPortionId": "SEG_MAD_JFK_20240403",
                                "serviceCategories": []
                            },
                            {
                                "itineraryPortionId": "SEG_JFK_MIA_20240404",
                                "serviceCategories": []
                            }
                        ]
                    }
                ],
                "passengersBaggageAllowance": [
                    {
                        "passengerId": 1,
                        "isInfant": false,
                        "baggageItineraryPortions": [
                            {
                                "itineraryPortionId": "BND_MIA_MAD_20240326",
                                "baggageAllowance": {
                                    "checkedBaggage": {
                                        "numberOfPieces": 2,
                                        "pieceOrWeightAllowance": "PIECE",
                                        "baggageCharacteristics": {
                                            "weightKg": 32,
                                            "weightLbs": 70,
                                            "dimensionsTotalCm": 158,
                                            "dimensionsTotalIn": 62
                                        }
                                    }
                                }
                            },
                            {
                                "itineraryPortionId": "BND_MAD_MIA_20240403",
                                "baggageAllowance": {
                                    "checkedBaggage": {
                                        "numberOfPieces": 1,
                                        "pieceOrWeightAllowance": "PIECE",
                                        "baggageCharacteristics": {
                                            "weightKg": 23,
                                            "weightLbs": 50,
                                            "dimensionsTotalCm": 158,
                                            "dimensionsTotalIn": 62
                                        }
                                    }
                                }
                            }
                        ]
                    }
                ],
                "passengersSpecialAssistance": [],
                "customizable": true,
                "customization": {
                    "customizationOfServices": true,
                    "modificationOfPassengers": false
                },
                "bookingCompletionStep": "PAYMENT",
                "servicesToBook": [],
                "prices": {
                    "passengersPrices": [
                        {
                            "passengerId": 1,
                            "infantPrices": false,
                            "airTransportationPrices": [
                                {
                                    "currency": "EUR",
                                    "airTransportationTotalAmount": 4664.1,
                                    "airTransportationTotalAmount2": {
                                        "cash": 4664.1
                                    },
                                    "airTransportationNetAmount": 3552,
                                    "airTransportationNetAmount2": {
                                        "cash": 3552
                                    },
                                    "airTransportationChargesAmount": 4568.01,
                                    "airTransportationChargesAmount2": {
                                        "cash": 4568.01
                                    },
                                    "taxTotalAmount": 96.09,
                                    "taxTotalAmount2": {
                                        "cash": 96.09
                                    },
                                    "taxes": [
                                        {
                                            "amount": 20.2,
                                            "amount2": {
                                                "cash": 20.2
                                            },
                                            "code": "JD"
                                        },
                                        {
                                            "amount": 0.63,
                                            "amount2": {
                                                "cash": 0.63
                                            },
                                            "code": "OG"
                                        },
                                        {
                                            "amount": 3.27,
                                            "amount2": {
                                                "cash": 3.27
                                            },
                                            "code": "QV"
                                        },
                                        {
                                            "amount": 10.36,
                                            "amount2": {
                                                "cash": 10.36
                                            },
                                            "code": "AY"
                                        },
                                        {
                                            "amount": 20.51,
                                            "amount2": {
                                                "cash": 20.51
                                            },
                                            "code": "US"
                                        },
                                        {
                                            "amount": 20.51,
                                            "amount2": {
                                                "cash": 20.51
                                            },
                                            "code": "US"
                                        },
                                        {
                                            "amount": 3.54,
                                            "amount2": {
                                                "cash": 3.54
                                            },
                                            "code": "XA"
                                        },
                                        {
                                            "amount": 6.47,
                                            "amount2": {
                                                "cash": 6.47
                                            },
                                            "code": "XY"
                                        },
                                        {
                                            "amount": 6.44,
                                            "amount2": {
                                                "cash": 6.44
                                            },
                                            "code": "YC"
                                        },
                                        {
                                            "amount": 4.16,
                                            "amount2": {
                                                "cash": 4.16
                                            },
                                            "code": "XF"
                                        }
                                    ],
                                    "fuelSurchargeTotalAmount": 1016.01,
                                    "fuelSurchargeTotalAmount2": {
                                        "cash": 1016.01
                                    },
                                    "fuelSurcharges": [
                                        {
                                            "amount": 1016.01,
                                            "amount2": {
                                                "cash": 1016.01
                                            },
                                            "code": "YQ"
                                        }
                                    ]
                                }
                            ],
                            "extraPrices": []
                        }
                    ],
                    "unpaidTotalsPerCurrency": {
                        "EUR": {
                            "currency": "EUR",
                            "airTransportationTotalAmount": 4664.1,
                            "airTransportationNetTotalAmount": 3552,
                            "airTransportationChargesTotalAmount": 4568.01,
                            "taxTotalAmount": 96.09,
                            "fuelSurchargeTotalAmount": 1016.01,
                            "grandTotalAmount": 4664.1
                        }
                    },
                    "paidTotalsPerCurrency": {}
                }
            }
        },
        "gtm.uniqueEventId": 88
    },
    {
        "ecommerce": null
    },
    {
        "event": "select_item",
        "ecommerce": {
            "products": [
                {
                    "item_name": "BAGGAGE",
                    "item_id": "BND_MIA_MAD_20240326_BAGGAGE_1_PDBG",
                    "item_price": 100,
                    "item_brand": "Air Europa",
                    "item_category": "BND_MIA_MAD_20240326",
                    "item_category2": null,
                    "item_category3": null,
                    "item_category4": null,
                    "item_category5": [
                        "BND_MIA_MAD_20240326"
                    ],
                    "item_list_name": "AncillaryService",
                    "index": 0,
                    "quantity": null
                },
                {
                    "item_name": "BAGGAGE",
                    "item_id": "BND_MIA_MAD_20240326_BAGGAGE_1_XBAG",
                    "item_price": 120,
                    "item_brand": "Air Europa",
                    "item_category": "BND_MIA_MAD_20240326",
                    "item_category2": null,
                    "item_category3": null,
                    "item_category4": null,
                    "item_category5": [
                        "BND_MIA_MAD_20240326"
                    ],
                    "item_list_name": "AncillaryService",
                    "index": 1,
                    "quantity": null
                }
            ]
        },
        "gtm.uniqueEventId": 90
    },
    {
        "ecommerce": null
    },
    {
        "event": "add_to_cart",
        "ecommerce": {
            "products": [
                {
                    "item_name": "BAGGAGE",
                    "item_id": "BND_MIA_MAD_20240326_BAGGAGE_1_PDBG",
                    "item_price": 100,
                    "item_brand": "Air Europa",
                    "item_category": "BND_MIA_MAD_20240326",
                    "item_category2": null,
                    "item_category3": null,
                    "item_category4": null,
                    "item_category5": [
                        "BND_MIA_MAD_20240326"
                    ],
                    "item_list_name": "AncillaryService",
                    "index": 0,
                    "quantity": 1
                }
            ]
        },
        "gtm.uniqueEventId": 94
    },
    {
        "ecommerce": null
    },
    {
        "event": "add_to_cart",
        "ecommerce": {
            "products": [
                {
                    "item_name": "BAGGAGE",
                    "item_id": "BND_MIA_MAD_20240326_BAGGAGE_1_XBAG",
                    "item_price": 120,
                    "item_brand": "Air Europa",
                    "item_category": "BND_MIA_MAD_20240326",
                    "item_category2": null,
                    "item_category3": null,
                    "item_category4": null,
                    "item_category5": [
                        "BND_MIA_MAD_20240326"
                    ],
                    "item_list_name": "AncillaryService",
                    "index": 0,
                    "quantity": 3
                }
            ]
        },
        "gtm.uniqueEventId": 97
    },
    {
        "ecommerce": null
    },
    {
        "event": "select_item",
        "ecommerce": {
            "products": [
                {
                    "item_name": "SPORT",
                    "item_id": "BND_MIA_MAD_20240326_SPORT_1_BIKE",
                    "item_price": 200,
                    "item_brand": "Air Europa",
                    "item_category": "BND_MIA_MAD_20240326",
                    "item_category2": null,
                    "item_category3": null,
                    "item_category4": null,
                    "item_category5": [
                        "BND_MIA_MAD_20240326"
                    ],
                    "item_list_name": "AncillaryService",
                    "index": 0,
                    "quantity": null
                }
            ]
        },
        "gtm.uniqueEventId": 103
    },
    {
        "ecommerce": null
    },
    {
        "event": "add_to_cart",
        "ecommerce": {
            "products": [
                {
                    "item_name": "SPORT",
                    "item_id": "BND_MIA_MAD_20240326_SPORT_1_BIKE",
                    "item_price": 200,
                    "item_brand": "Air Europa",
                    "item_category": "BND_MIA_MAD_20240326",
                    "item_category2": null,
                    "item_category3": null,
                    "item_category4": null,
                    "item_category5": [
                        "BND_MIA_MAD_20240326"
                    ],
                    "item_list_name": "AncillaryService",
                    "index": 0,
                    "quantity": 1
                }
            ]
        },
        "gtm.uniqueEventId": 107
    },
    {
        "event": "retail:updateCart",
        "retail": {
            "meta": {
                "language": "en-US",
                "sessionId": "BXVOSORTDRONDDVHTPMT"
            },
            "airportCityMap": {
                "JFK": "NYC"
            },
            "airportCountryMap": {
                "MAD": "ES",
                "MIA": "US",
                "NYC": "US",
                "JFK": "US"
            },
            "flightSearch": {
                "origin": "MIA",
                "destination": "MAD",
                "departureDate": "2024-03-26",
                "returnDate": "2024-04-03",
                "tripType": "RoundTrip",
                "passengers": {
                    "numberOfAdults": 1,
                    "numberOfChildren": 0,
                    "numberOfInfants": 0,
                    "numberOfSeniors": 0,
                    "numberOfYouths": 0,
                    "numberOfResidents": 0,
                    "numberOfStudents": 0
                },
                "discounts": {},
                "award": false
            },
            "itinerary": {
                "bounds": [
                    {
                        "id": "BND_MIA_MAD_20240326",
                        "itineraryPortionId": "BND_MIA_MAD_20240326",
                        "origin": "MIA",
                        "destination": "MAD",
                        "originAirport": "MIA",
                        "destinationAirport": "MAD",
                        "sectors": [
                            {
                                "id": "SEC_MIA_MAD_20240326",
                                "originAirport": "MIA",
                                "destinationAirport": "MAD",
                                "startDate": "2024-03-26T22:45:00",
                                "endDate": "2024-03-27T12:05:00",
                                "elapsedDays": 1,
                                "duration": 500,
                                "fareFamilyCode": "BUS_FLEX_WW_L",
                                "segments": [
                                    {
                                        "id": "SEG_MIA_MAD_20240326",
                                        "originAirport": "MIA",
                                        "destinationAirport": "MAD",
                                        "marketingAirlineCode": "UX",
                                        "flightNumber": "98",
                                        "startDate": "2024-03-26T22:45:00",
                                        "endDate": "2024-03-27T12:05:00",
                                        "elapsedDays": 1,
                                        "duration": 500,
                                        "arrivalTerminal": "1",
                                        "legs": [
                                            {
                                                "id": "SEG_MIA_MAD_20240326",
                                                "originAirport": "MIA",
                                                "destinationAirport": "MAD",
                                                "arrivalTerminal": "1",
                                                "startDate": "2024-03-26T22:45:00",
                                                "endDate": "2024-03-27T12:05:00",
                                                "elapsedDays": 1,
                                                "duration": 500,
                                                "aircraftType": "789",
                                                "itineraryPortionId": "SEG_MIA_MAD_20240326"
                                            }
                                        ],
                                        "rbd": "J",
                                        "cabinCode": "Economy",
                                        "fareBasisCode": "JYYRAH",
                                        "itineraryPortionId": "SEG_MIA_MAD_20240326"
                                    }
                                ],
                                "itineraryPortionId": "SEC_MIA_MAD_20240326"
                            }
                        ],
                        "startDate": "2024-03-26T22:45:00",
                        "endDate": "2024-03-27T12:05:00",
                        "fareFamilyCode": "BUS_FLEX_WW_L"
                    },
                    {
                        "id": "BND_MAD_MIA_20240403",
                        "itineraryPortionId": "BND_MAD_MIA_20240403",
                        "origin": "MAD",
                        "destination": "MIA",
                        "originAirport": "MAD",
                        "destinationAirport": "MIA",
                        "sectors": [
                            {
                                "id": "SEC_MAD_MIA_20240403",
                                "originAirport": "MAD",
                                "destinationAirport": "MIA",
                                "startDate": "2024-04-03T10:00:00",
                                "endDate": "2024-04-04T12:24:00",
                                "elapsedDays": 1,
                                "duration": 1944,
                                "fareFamilyCode": "ECO_STD_WW_L",
                                "segments": [
                                    {
                                        "id": "SEG_MAD_JFK_20240403",
                                        "originAirport": "MAD",
                                        "destinationAirport": "JFK",
                                        "marketingAirlineCode": "UX",
                                        "operatingAirlineCode": "DL",
                                        "flightNumber": "3391",
                                        "startDate": "2024-04-03T10:00:00",
                                        "endDate": "2024-04-03T12:30:00",
                                        "elapsedDays": 0,
                                        "duration": 510,
                                        "departureTerminal": "1",
                                        "arrivalTerminal": "4",
                                        "legs": [
                                            {
                                                "id": "SEG_MAD_JFK_20240403",
                                                "originAirport": "MAD",
                                                "destinationAirport": "JFK",
                                                "arrivalTerminal": "4",
                                                "departureTerminal": "1",
                                                "startDate": "2024-04-03T10:00:00",
                                                "endDate": "2024-04-03T12:30:00",
                                                "elapsedDays": 0,
                                                "duration": 510,
                                                "aircraftType": "764",
                                                "itineraryPortionId": "SEG_MAD_JFK_20240403"
                                            }
                                        ],
                                        "layoverFollowing": {
                                            "startDate": "2024-04-03T12:30:00",
                                            "endDate": "2024-04-04T09:05:00",
                                            "arrivalTerminal": "4",
                                            "departureTerminal": "4",
                                            "changeOfAirport": false,
                                            "changeOfTerminal": false,
                                            "elapsedDays": 1,
                                            "duration": 1235
                                        },
                                        "rbd": "M",
                                        "cabinCode": "Economy",
                                        "fareBasisCode": "MLYRAE",
                                        "itineraryPortionId": "SEG_MAD_JFK_20240403"
                                    },
                                    {
                                        "id": "SEG_JFK_MIA_20240404",
                                        "originAirport": "JFK",
                                        "destinationAirport": "MIA",
                                        "marketingAirlineCode": "DL",
                                        "flightNumber": "1698",
                                        "startDate": "2024-04-04T09:05:00",
                                        "endDate": "2024-04-04T12:24:00",
                                        "elapsedDays": 0,
                                        "duration": 199,
                                        "departureTerminal": "4",
                                        "legs": [
                                            {
                                                "id": "SEG_JFK_MIA_20240404",
                                                "originAirport": "JFK",
                                                "destinationAirport": "MIA",
                                                "departureTerminal": "4",
                                                "startDate": "2024-04-04T09:05:00",
                                                "endDate": "2024-04-04T12:24:00",
                                                "elapsedDays": 0,
                                                "duration": 199,
                                                "aircraftType": "739",
                                                "itineraryPortionId": "SEG_JFK_MIA_20240404"
                                            }
                                        ],
                                        "rbd": "K",
                                        "cabinCode": "Economy",
                                        "fareBasisCode": "MLYRAE",
                                        "itineraryPortionId": "SEG_JFK_MIA_20240404"
                                    }
                                ],
                                "itineraryPortionId": "SEC_MAD_MIA_20240403"
                            }
                        ],
                        "startDate": "2024-04-03T10:00:00",
                        "endDate": "2024-04-04T12:24:00",
                        "fareFamilyCode": "ECO_STD_WW_L"
                    }
                ],
                "itineraryPortionId": "ITY_MIA_MAD_20240326",
                "tripType": "RoundTrip",
                "stopover": false
            },
            "booking": {
                "messages": [],
                "dictionary": {
                    "airports": {
                        "MAD": {
                            "name": "Madrid Barajas",
                            "cityCode": "MAD",
                            "countryCode": "ES"
                        },
                        "MIA": {
                            "name": "Miami International",
                            "cityCode": "MIA",
                            "countryCode": "US"
                        },
                        "JFK": {
                            "name": "John F Kennedy",
                            "cityCode": "NYC",
                            "countryCode": "US"
                        }
                    },
                    "cities": {
                        "MAD": {
                            "name": "Madrid",
                            "countryCode": "ES"
                        },
                        "MIA": {
                            "name": "Miami",
                            "countryCode": "US"
                        },
                        "NYC": {
                            "name": "New York",
                            "countryCode": "US"
                        }
                    },
                    "municipalities": {}
                },
                "bookingId": "f0eff70c-390d-4976-b4bf-2e330dd427a8",
                "externalBooking": false,
                "recordLocator": "OU69S2",
                "bookingStatus": "CUSTOMIZED",
                "ticketStatus": "XL",
                "purchasedDate": "2024-02-05",
                "itinerary": {
                    "id": "ITY_MIA_MAD_20240326",
                    "tripType": "RoundTrip",
                    "stopover": false,
                    "bounds": [
                        {
                            "id": "BND_MIA_MAD_20240326",
                            "originAirport": "MIA",
                            "destinationAirport": "MAD",
                            "originCity": "MIA",
                            "destinationCity": "MAD",
                            "startDate": "2024-03-26T22:45:00",
                            "endDate": "2024-03-27T12:05:00",
                            "fareFamilyCode": "BUS_FLEX_WW_L",
                            "sectors": [
                                {
                                    "id": "SEC_MIA_MAD_20240326",
                                    "originAirport": "MIA",
                                    "destinationAirport": "MAD",
                                    "startDate": "2024-03-26T22:45:00",
                                    "endDate": "2024-03-27T12:05:00",
                                    "elapsedDays": 1,
                                    "duration": 500,
                                    "fareFamilyCode": "BUS_FLEX_WW_L",
                                    "segments": [
                                        {
                                            "id": "SEG_MIA_MAD_20240326",
                                            "originAirport": "MIA",
                                            "destinationAirport": "MAD",
                                            "marketingAirlineCode": "UX",
                                            "flightNumber": "98",
                                            "startDate": "2024-03-26T22:45:00",
                                            "endDate": "2024-03-27T12:05:00",
                                            "elapsedDays": 1,
                                            "duration": 500,
                                            "arrivalTerminal": "1",
                                            "legs": [
                                                {
                                                    "id": "SEG_MIA_MAD_20240326",
                                                    "originAirport": "MIA",
                                                    "destinationAirport": "MAD",
                                                    "arrivalTerminal": "1",
                                                    "startDate": "2024-03-26T22:45:00",
                                                    "endDate": "2024-03-27T12:05:00",
                                                    "elapsedDays": 1,
                                                    "duration": 500,
                                                    "aircraftType": "789"
                                                }
                                            ],
                                            "rbd": "J",
                                            "cabinCode": "Economy",
                                            "fareBasisCode": "JYYRAH"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "BND_MAD_MIA_20240403",
                            "originAirport": "MAD",
                            "destinationAirport": "MIA",
                            "originCity": "MAD",
                            "destinationCity": "MIA",
                            "startDate": "2024-04-03T10:00:00",
                            "endDate": "2024-04-04T12:24:00",
                            "fareFamilyCode": "ECO_STD_WW_L",
                            "sectors": [
                                {
                                    "id": "SEC_MAD_MIA_20240403",
                                    "originAirport": "MAD",
                                    "destinationAirport": "MIA",
                                    "startDate": "2024-04-03T10:00:00",
                                    "endDate": "2024-04-04T12:24:00",
                                    "elapsedDays": 1,
                                    "duration": 1944,
                                    "fareFamilyCode": "ECO_STD_WW_L",
                                    "segments": [
                                        {
                                            "id": "SEG_MAD_JFK_20240403",
                                            "originAirport": "MAD",
                                            "destinationAirport": "JFK",
                                            "marketingAirlineCode": "UX",
                                            "operatingAirlineCode": "DL",
                                            "flightNumber": "3391",
                                            "startDate": "2024-04-03T10:00:00",
                                            "endDate": "2024-04-03T12:30:00",
                                            "elapsedDays": 0,
                                            "duration": 510,
                                            "departureTerminal": "1",
                                            "arrivalTerminal": "4",
                                            "legs": [
                                                {
                                                    "id": "SEG_MAD_JFK_20240403",
                                                    "originAirport": "MAD",
                                                    "destinationAirport": "JFK",
                                                    "arrivalTerminal": "4",
                                                    "departureTerminal": "1",
                                                    "startDate": "2024-04-03T10:00:00",
                                                    "endDate": "2024-04-03T12:30:00",
                                                    "elapsedDays": 0,
                                                    "duration": 510,
                                                    "aircraftType": "764"
                                                }
                                            ],
                                            "layoverFollowing": {
                                                "startDate": "2024-04-03T12:30:00",
                                                "endDate": "2024-04-04T09:05:00",
                                                "arrivalTerminal": "4",
                                                "departureTerminal": "4",
                                                "changeOfAirport": false,
                                                "changeOfTerminal": false,
                                                "elapsedDays": 1,
                                                "duration": 1235
                                            },
                                            "rbd": "M",
                                            "cabinCode": "Economy",
                                            "fareBasisCode": "MLYRAE"
                                        },
                                        {
                                            "id": "SEG_JFK_MIA_20240404",
                                            "originAirport": "JFK",
                                            "destinationAirport": "MIA",
                                            "marketingAirlineCode": "DL",
                                            "flightNumber": "1698",
                                            "startDate": "2024-04-04T09:05:00",
                                            "endDate": "2024-04-04T12:24:00",
                                            "elapsedDays": 0,
                                            "duration": 199,
                                            "departureTerminal": "4",
                                            "legs": [
                                                {
                                                    "id": "SEG_JFK_MIA_20240404",
                                                    "originAirport": "JFK",
                                                    "destinationAirport": "MIA",
                                                    "departureTerminal": "4",
                                                    "startDate": "2024-04-04T09:05:00",
                                                    "endDate": "2024-04-04T12:24:00",
                                                    "elapsedDays": 0,
                                                    "duration": 199,
                                                    "aircraftType": "739"
                                                }
                                            ],
                                            "rbd": "K",
                                            "cabinCode": "Economy",
                                            "fareBasisCode": "MLYRAE"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                "contactDetails": {
                    "email": "kwarzel@pros.com",
                    "notificationNumber": {
                        "prefix": "+1",
                        "number": "3053056064"
                    }
                },
                "passengerDictionary": {
                    "1": {
                        "id": 1,
                        "gender": "FEMALE",
                        "type": "ADT",
                        "firstName": "Katharina",
                        "salutation": "MRS",
                        "lastName": "Warzel",
                        "secondLastName": "",
                        "dateOfBirth": "1990-03-26",
                        "travelDocument": {
                            "type": "P",
                            "number": "C4FX5VP2F",
                            "issueCountry": "DE",
                            "nationality": "DE",
                            "expirationDate": "2026-11-14"
                        },
                        "visaList": [],
                        "frequentFlyerProgram": "DL",
                        "frequentFlyerNumber": "9465866359"
                    }
                },
                "totalNumberOfPassengers": 1,
                "itineraryPortionDictionary": {
                    "BND_MAD_MIA_20240403": {
                        "id": "BND_MAD_MIA_20240403",
                        "level": "bound",
                        "originAirport": "MAD",
                        "destinationAirport": "MIA",
                        "startDate": "2024-04-03T10:00:00",
                        "endDate": "2024-04-04T12:24:00"
                    },
                    "SEC_MIA_MAD_20240326": {
                        "id": "SEC_MIA_MAD_20240326",
                        "level": "sector",
                        "originAirport": "MIA",
                        "destinationAirport": "MAD",
                        "startDate": "2024-03-26T22:45:00",
                        "endDate": "2024-03-27T12:05:00"
                    },
                    "ITY_MIA_MAD_20240326": {
                        "id": "ITY_MIA_MAD_20240326",
                        "level": "itinerary",
                        "originAirport": "MIA",
                        "destinationAirport": "MAD",
                        "startDate": "2024-03-26T22:45:00",
                        "endDate": "2024-04-04T09:05:00"
                    },
                    "BND_MIA_MAD_20240326": {
                        "id": "BND_MIA_MAD_20240326",
                        "level": "bound",
                        "originAirport": "MIA",
                        "destinationAirport": "MAD",
                        "startDate": "2024-03-26T22:45:00",
                        "endDate": "2024-03-27T12:05:00"
                    },
                    "SEC_MAD_MIA_20240403": {
                        "id": "SEC_MAD_MIA_20240403",
                        "level": "sector",
                        "originAirport": "MAD",
                        "destinationAirport": "MIA",
                        "startDate": "2024-04-03T10:00:00",
                        "endDate": "2024-04-04T12:24:00"
                    },
                    "SEG_MAD_JFK_20240403": {
                        "id": "SEG_MAD_JFK_20240403",
                        "level": "segment",
                        "originAirport": "MAD",
                        "destinationAirport": "JFK",
                        "startDate": "2024-04-03T10:00:00",
                        "endDate": "2024-04-03T12:30:00"
                    },
                    "SEG_MIA_MAD_20240326": {
                        "id": "SEG_MIA_MAD_20240326",
                        "level": "segment",
                        "originAirport": "MIA",
                        "destinationAirport": "MAD",
                        "startDate": "2024-03-26T22:45:00",
                        "endDate": "2024-03-27T12:05:00"
                    },
                    "SEG_JFK_MIA_20240404": {
                        "id": "SEG_JFK_MIA_20240404",
                        "level": "segment",
                        "originAirport": "JFK",
                        "destinationAirport": "MIA",
                        "startDate": "2024-04-04T09:05:00",
                        "endDate": "2024-04-04T12:24:00"
                    }
                },
                "passengersServices": [
                    {
                        "passengerId": 1,
                        "isInfant": false,
                        "serviceItineraryPortions": [
                            {
                                "itineraryPortionId": "SEG_MIA_MAD_20240326",
                                "serviceCategories": [
                                    {
                                        "code": "SEAT",
                                        "services": [
                                            {
                                                "itineraryPortionId": "SEG_MIA_MAD_20240326",
                                                "passengerId": 1,
                                                "serviceCategoryCode": "SEAT",
                                                "marketingServiceCategoryCode": "SEAT",
                                                "serviceCode": "SEAT",
                                                "unit": "PCE",
                                                "quantityToBook": 1,
                                                "quantityPurchased": 0,
                                                "maximumPurchasable": 1,
                                                "preOrdered": false,
                                                "selectedSeatNumber": "3G"
                                            }
                                        ]
                                    },
                                    {
                                        "code": "BAGGAGE",
                                        "services": [
                                            {
                                                "itineraryPortionId": "BND_MIA_MAD_20240326",
                                                "passengerId": 1,
                                                "serviceCategoryCode": "BAGGAGE",
                                                "marketingServiceCategoryCode": "BAGGAGE",
                                                "serviceCode": "XBAG",
                                                "unit": "PCE",
                                                "quantityToBook": 3,
                                                "quantityPurchased": 0,
                                                "maximumPurchasable": 0,
                                                "preOrdered": false,
                                                "price": 120,
                                                "currency": "EUR",
                                                "baggageCharacteristics": {
                                                    "weightKg": 23,
                                                    "weightLbs": 50,
                                                    "dimensionsTotalCm": 158,
                                                    "dimensionsTotalIn": 62
                                                }
                                            },
                                            {
                                                "itineraryPortionId": "BND_MIA_MAD_20240326",
                                                "passengerId": 1,
                                                "serviceCategoryCode": "BAGGAGE",
                                                "marketingServiceCategoryCode": "BAGGAGE",
                                                "serviceCode": "PDBG",
                                                "unit": "PCE",
                                                "quantityToBook": 1,
                                                "quantityPurchased": 0,
                                                "maximumPurchasable": 0,
                                                "preOrdered": false,
                                                "price": 100,
                                                "currency": "EUR",
                                                "baggageCharacteristics": {
                                                    "weightKg": 23,
                                                    "weightLbs": 50,
                                                    "dimensionsTotalCm": 158,
                                                    "dimensionsTotalIn": 62
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        "code": "SPORT",
                                        "services": [
                                            {
                                                "itineraryPortionId": "BND_MIA_MAD_20240326",
                                                "passengerId": 1,
                                                "serviceCategoryCode": "SPORT",
                                                "marketingServiceCategoryCode": "SPORT",
                                                "serviceCode": "BIKE",
                                                "unit": "PCE",
                                                "quantityToBook": 1,
                                                "quantityPurchased": 0,
                                                "maximumPurchasable": 0,
                                                "preOrdered": false,
                                                "price": 200,
                                                "currency": "EUR"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "itineraryPortionId": "SEG_MAD_JFK_20240403",
                                "serviceCategories": []
                            },
                            {
                                "itineraryPortionId": "SEG_JFK_MIA_20240404",
                                "serviceCategories": []
                            }
                        ]
                    }
                ],
                "passengersBaggageAllowance": [
                    {
                        "passengerId": 1,
                        "isInfant": false,
                        "baggageItineraryPortions": [
                            {
                                "itineraryPortionId": "BND_MIA_MAD_20240326",
                                "baggageAllowance": {
                                    "checkedBaggage": {
                                        "numberOfPieces": 2,
                                        "pieceOrWeightAllowance": "PIECE",
                                        "baggageCharacteristics": {
                                            "weightKg": 32,
                                            "weightLbs": 70,
                                            "dimensionsTotalCm": 158,
                                            "dimensionsTotalIn": 62
                                        }
                                    }
                                }
                            },
                            {
                                "itineraryPortionId": "BND_MAD_MIA_20240403",
                                "baggageAllowance": {
                                    "checkedBaggage": {
                                        "numberOfPieces": 1,
                                        "pieceOrWeightAllowance": "PIECE",
                                        "baggageCharacteristics": {
                                            "weightKg": 23,
                                            "weightLbs": 50,
                                            "dimensionsTotalCm": 158,
                                            "dimensionsTotalIn": 62
                                        }
                                    }
                                }
                            }
                        ]
                    }
                ],
                "passengersSpecialAssistance": [],
                "customizable": true,
                "bookingCompletionStep": "PAYMENT",
                "servicesToBook": [
                    {
                        "realCategoryCode": "SEAT",
                        "categoryCode": "SEAT",
                        "itineraryPortionId": "SEG_MIA_MAD_20240326",
                        "passengerId": 1,
                        "serviceCode": "SEAT",
                        "quantityPurchased": 0,
                        "quantity": 1,
                        "seatNumber": "3G",
                        "unit": "PCE",
                        "preOrdered": false
                    },
                    {
                        "realCategoryCode": "BAGGAGE",
                        "categoryCode": "BAGGAGE",
                        "itineraryPortionId": "BND_MIA_MAD_20240326",
                        "passengerId": 1,
                        "serviceCode": "XBAG",
                        "quantityPurchased": 0,
                        "quantity": 3,
                        "currency": "EUR",
                        "servicePrice": 120,
                        "unit": "PCE",
                        "preOrdered": false
                    },
                    {
                        "realCategoryCode": "BAGGAGE",
                        "categoryCode": "BAGGAGE",
                        "itineraryPortionId": "BND_MIA_MAD_20240326",
                        "passengerId": 1,
                        "serviceCode": "PDBG",
                        "quantityPurchased": 0,
                        "quantity": 1,
                        "currency": "EUR",
                        "servicePrice": 100,
                        "unit": "PCE",
                        "preOrdered": false
                    },
                    {
                        "realCategoryCode": "SPORT",
                        "categoryCode": "SPORT",
                        "itineraryPortionId": "BND_MIA_MAD_20240326",
                        "passengerId": 1,
                        "serviceCode": "BIKE",
                        "quantityPurchased": 0,
                        "quantity": 1,
                        "currency": "EUR",
                        "servicePrice": 200,
                        "unit": "PCE",
                        "preOrdered": false
                    }
                ],
                "prices": {
                    "passengersPrices": [
                        {
                            "passengerId": 1,
                            "infantPrices": false,
                            "airTransportationPrices": [
                                {
                                    "currency": "EUR",
                                    "airTransportationTotalAmount": 4664.1,
                                    "airTransportationTotalAmount2": {
                                        "cash": 4664.1
                                    },
                                    "airTransportationNetAmount": 3552,
                                    "airTransportationNetAmount2": {
                                        "cash": 3552
                                    },
                                    "airTransportationChargesAmount": 4568.01,
                                    "airTransportationChargesAmount2": {
                                        "cash": 4568.01
                                    },
                                    "taxTotalAmount": 96.09,
                                    "taxTotalAmount2": {
                                        "cash": 96.09
                                    },
                                    "taxes": [
                                        {
                                            "amount": 20.2,
                                            "amount2": {
                                                "cash": 20.2
                                            },
                                            "code": "JD"
                                        },
                                        {
                                            "amount": 0.63,
                                            "amount2": {
                                                "cash": 0.63
                                            },
                                            "code": "OG"
                                        },
                                        {
                                            "amount": 3.27,
                                            "amount2": {
                                                "cash": 3.27
                                            },
                                            "code": "QV"
                                        },
                                        {
                                            "amount": 10.36,
                                            "amount2": {
                                                "cash": 10.36
                                            },
                                            "code": "AY"
                                        },
                                        {
                                            "amount": 20.51,
                                            "amount2": {
                                                "cash": 20.51
                                            },
                                            "code": "US"
                                        },
                                        {
                                            "amount": 20.51,
                                            "amount2": {
                                                "cash": 20.51
                                            },
                                            "code": "US"
                                        },
                                        {
                                            "amount": 3.54,
                                            "amount2": {
                                                "cash": 3.54
                                            },
                                            "code": "XA"
                                        },
                                        {
                                            "amount": 6.47,
                                            "amount2": {
                                                "cash": 6.47
                                            },
                                            "code": "XY"
                                        },
                                        {
                                            "amount": 6.44,
                                            "amount2": {
                                                "cash": 6.44
                                            },
                                            "code": "YC"
                                        },
                                        {
                                            "amount": 4.16,
                                            "amount2": {
                                                "cash": 4.16
                                            },
                                            "code": "XF"
                                        }
                                    ],
                                    "fuelSurchargeTotalAmount": 1016.01,
                                    "fuelSurchargeTotalAmount2": {
                                        "cash": 1016.01
                                    },
                                    "fuelSurcharges": [
                                        {
                                            "amount": 1016.01,
                                            "amount2": {
                                                "cash": 1016.01
                                            },
                                            "code": "YQ"
                                        }
                                    ]
                                }
                            ],
                            "extraPrices": [
                                {
                                    "currency": "EUR",
                                    "amount": 200,
                                    "amount2": {
                                        "cash": 200
                                    },
                                    "serviceCode": "BIKE"
                                },
                                {
                                    "currency": "EUR",
                                    "amount": 100,
                                    "amount2": {
                                        "cash": 100
                                    },
                                    "serviceCode": "PDBG"
                                },
                                {
                                    "currency": "EUR",
                                    "amount": 120,
                                    "amount2": {
                                        "cash": 120
                                    },
                                    "serviceCode": "XBAG"
                                },
                                {
                                    "currency": "EUR",
                                    "amount": 120,
                                    "amount2": {
                                        "cash": 120
                                    },
                                    "serviceCode": "XBAG"
                                },
                                {
                                    "currency": "EUR",
                                    "amount": 120,
                                    "amount2": {
                                        "cash": 120
                                    },
                                    "serviceCode": "XBAG"
                                }
                            ]
                        }
                    ],
                    "unpaidTotalsPerCurrency": {
                        "EUR": {
                            "currency": "EUR",
                            "airTransportationTotalAmount": 4664.1,
                            "airTransportationNetTotalAmount": 3552,
                            "airTransportationChargesTotalAmount": 4568.01,
                            "taxTotalAmount": 96.09,
                            "fuelSurchargeTotalAmount": 1016.01,
                            "grandTotalAmount": 5324.1
                        }
                    },
                    "paidTotalsPerCurrency": {}
                }
            }
        },
        "gtm.uniqueEventId": 114
    },
    {
        "event": "retail:pageview",
        "retail": {
            "meta": {
                "language": "en-US",
                "sessionId": "BXVOSORTDRONDDVHTPMT"
            },
            "airportCityMap": {
                "JFK": "NYC"
            },
            "airportCountryMap": {
                "MAD": "ES",
                "MIA": "US",
                "NYC": "US",
                "JFK": "US"
            },
            "flightSearch": {
                "origin": "MIA",
                "destination": "MAD",
                "departureDate": "2024-03-26",
                "returnDate": "2024-04-03",
                "tripType": "RoundTrip",
                "passengers": {
                    "numberOfAdults": 1,
                    "numberOfChildren": 0,
                    "numberOfInfants": 0,
                    "numberOfSeniors": 0,
                    "numberOfYouths": 0,
                    "numberOfResidents": 0,
                    "numberOfStudents": 0
                },
                "discounts": {},
                "award": false
            },
            "itinerary": {
                "bounds": [
                    {
                        "id": "BND_MIA_MAD_20240326",
                        "itineraryPortionId": "BND_MIA_MAD_20240326",
                        "origin": "MIA",
                        "destination": "MAD",
                        "originAirport": "MIA",
                        "destinationAirport": "MAD",
                        "sectors": [
                            {
                                "id": "SEC_MIA_MAD_20240326",
                                "originAirport": "MIA",
                                "destinationAirport": "MAD",
                                "startDate": "2024-03-26T22:45:00",
                                "endDate": "2024-03-27T12:05:00",
                                "elapsedDays": 1,
                                "duration": 500,
                                "fareFamilyCode": "BUS_FLEX_WW_L",
                                "segments": [
                                    {
                                        "id": "SEG_MIA_MAD_20240326",
                                        "originAirport": "MIA",
                                        "destinationAirport": "MAD",
                                        "marketingAirlineCode": "UX",
                                        "flightNumber": "98",
                                        "startDate": "2024-03-26T22:45:00",
                                        "endDate": "2024-03-27T12:05:00",
                                        "elapsedDays": 1,
                                        "duration": 500,
                                        "arrivalTerminal": "1",
                                        "legs": [
                                            {
                                                "id": "SEG_MIA_MAD_20240326",
                                                "originAirport": "MIA",
                                                "destinationAirport": "MAD",
                                                "arrivalTerminal": "1",
                                                "startDate": "2024-03-26T22:45:00",
                                                "endDate": "2024-03-27T12:05:00",
                                                "elapsedDays": 1,
                                                "duration": 500,
                                                "aircraftType": "789",
                                                "itineraryPortionId": "SEG_MIA_MAD_20240326"
                                            }
                                        ],
                                        "rbd": "J",
                                        "cabinCode": "Economy",
                                        "fareBasisCode": "JYYRAH",
                                        "itineraryPortionId": "SEG_MIA_MAD_20240326"
                                    }
                                ],
                                "itineraryPortionId": "SEC_MIA_MAD_20240326"
                            }
                        ],
                        "startDate": "2024-03-26T22:45:00",
                        "endDate": "2024-03-27T12:05:00",
                        "fareFamilyCode": "BUS_FLEX_WW_L"
                    },
                    {
                        "id": "BND_MAD_MIA_20240403",
                        "itineraryPortionId": "BND_MAD_MIA_20240403",
                        "origin": "MAD",
                        "destination": "MIA",
                        "originAirport": "MAD",
                        "destinationAirport": "MIA",
                        "sectors": [
                            {
                                "id": "SEC_MAD_MIA_20240403",
                                "originAirport": "MAD",
                                "destinationAirport": "MIA",
                                "startDate": "2024-04-03T10:00:00",
                                "endDate": "2024-04-04T12:24:00",
                                "elapsedDays": 1,
                                "duration": 1944,
                                "fareFamilyCode": "ECO_STD_WW_L",
                                "segments": [
                                    {
                                        "id": "SEG_MAD_JFK_20240403",
                                        "originAirport": "MAD",
                                        "destinationAirport": "JFK",
                                        "marketingAirlineCode": "UX",
                                        "operatingAirlineCode": "DL",
                                        "flightNumber": "3391",
                                        "startDate": "2024-04-03T10:00:00",
                                        "endDate": "2024-04-03T12:30:00",
                                        "elapsedDays": 0,
                                        "duration": 510,
                                        "departureTerminal": "1",
                                        "arrivalTerminal": "4",
                                        "legs": [
                                            {
                                                "id": "SEG_MAD_JFK_20240403",
                                                "originAirport": "MAD",
                                                "destinationAirport": "JFK",
                                                "arrivalTerminal": "4",
                                                "departureTerminal": "1",
                                                "startDate": "2024-04-03T10:00:00",
                                                "endDate": "2024-04-03T12:30:00",
                                                "elapsedDays": 0,
                                                "duration": 510,
                                                "aircraftType": "764",
                                                "itineraryPortionId": "SEG_MAD_JFK_20240403"
                                            }
                                        ],
                                        "layoverFollowing": {
                                            "startDate": "2024-04-03T12:30:00",
                                            "endDate": "2024-04-04T09:05:00",
                                            "arrivalTerminal": "4",
                                            "departureTerminal": "4",
                                            "changeOfAirport": false,
                                            "changeOfTerminal": false,
                                            "elapsedDays": 1,
                                            "duration": 1235
                                        },
                                        "rbd": "M",
                                        "cabinCode": "Economy",
                                        "fareBasisCode": "MLYRAE",
                                        "itineraryPortionId": "SEG_MAD_JFK_20240403"
                                    },
                                    {
                                        "id": "SEG_JFK_MIA_20240404",
                                        "originAirport": "JFK",
                                        "destinationAirport": "MIA",
                                        "marketingAirlineCode": "DL",
                                        "flightNumber": "1698",
                                        "startDate": "2024-04-04T09:05:00",
                                        "endDate": "2024-04-04T12:24:00",
                                        "elapsedDays": 0,
                                        "duration": 199,
                                        "departureTerminal": "4",
                                        "legs": [
                                            {
                                                "id": "SEG_JFK_MIA_20240404",
                                                "originAirport": "JFK",
                                                "destinationAirport": "MIA",
                                                "departureTerminal": "4",
                                                "startDate": "2024-04-04T09:05:00",
                                                "endDate": "2024-04-04T12:24:00",
                                                "elapsedDays": 0,
                                                "duration": 199,
                                                "aircraftType": "739",
                                                "itineraryPortionId": "SEG_JFK_MIA_20240404"
                                            }
                                        ],
                                        "rbd": "K",
                                        "cabinCode": "Economy",
                                        "fareBasisCode": "MLYRAE",
                                        "itineraryPortionId": "SEG_JFK_MIA_20240404"
                                    }
                                ],
                                "itineraryPortionId": "SEC_MAD_MIA_20240403"
                            }
                        ],
                        "startDate": "2024-04-03T10:00:00",
                        "endDate": "2024-04-04T12:24:00",
                        "fareFamilyCode": "ECO_STD_WW_L"
                    }
                ],
                "itineraryPortionId": "ITY_MIA_MAD_20240326",
                "tripType": "RoundTrip",
                "stopover": false
            },
            "booking": {
                "messages": [],
                "dictionary": {
                    "airports": {
                        "MAD": {
                            "name": "Madrid Barajas",
                            "cityCode": "MAD",
                            "countryCode": "ES"
                        },
                        "MIA": {
                            "name": "Miami International",
                            "cityCode": "MIA",
                            "countryCode": "US"
                        },
                        "JFK": {
                            "name": "John F Kennedy",
                            "cityCode": "NYC",
                            "countryCode": "US"
                        }
                    },
                    "cities": {
                        "MAD": {
                            "name": "Madrid",
                            "countryCode": "ES"
                        },
                        "MIA": {
                            "name": "Miami",
                            "countryCode": "US"
                        },
                        "NYC": {
                            "name": "New York",
                            "countryCode": "US"
                        }
                    },
                    "municipalities": {}
                },
                "bookingId": "f0eff70c-390d-4976-b4bf-2e330dd427a8",
                "externalBooking": false,
                "recordLocator": "OU69S2",
                "bookingStatus": "CUSTOMIZED",
                "ticketStatus": "XL",
                "purchasedDate": "2024-02-05",
                "itinerary": {
                    "id": "ITY_MIA_MAD_20240326",
                    "tripType": "RoundTrip",
                    "stopover": false,
                    "bounds": [
                        {
                            "id": "BND_MIA_MAD_20240326",
                            "originAirport": "MIA",
                            "destinationAirport": "MAD",
                            "originCity": "MIA",
                            "destinationCity": "MAD",
                            "startDate": "2024-03-26T22:45:00",
                            "endDate": "2024-03-27T12:05:00",
                            "fareFamilyCode": "BUS_FLEX_WW_L",
                            "sectors": [
                                {
                                    "id": "SEC_MIA_MAD_20240326",
                                    "originAirport": "MIA",
                                    "destinationAirport": "MAD",
                                    "startDate": "2024-03-26T22:45:00",
                                    "endDate": "2024-03-27T12:05:00",
                                    "elapsedDays": 1,
                                    "duration": 500,
                                    "fareFamilyCode": "BUS_FLEX_WW_L",
                                    "segments": [
                                        {
                                            "id": "SEG_MIA_MAD_20240326",
                                            "originAirport": "MIA",
                                            "destinationAirport": "MAD",
                                            "marketingAirlineCode": "UX",
                                            "flightNumber": "98",
                                            "startDate": "2024-03-26T22:45:00",
                                            "endDate": "2024-03-27T12:05:00",
                                            "elapsedDays": 1,
                                            "duration": 500,
                                            "arrivalTerminal": "1",
                                            "legs": [
                                                {
                                                    "id": "SEG_MIA_MAD_20240326",
                                                    "originAirport": "MIA",
                                                    "destinationAirport": "MAD",
                                                    "arrivalTerminal": "1",
                                                    "startDate": "2024-03-26T22:45:00",
                                                    "endDate": "2024-03-27T12:05:00",
                                                    "elapsedDays": 1,
                                                    "duration": 500,
                                                    "aircraftType": "789"
                                                }
                                            ],
                                            "rbd": "J",
                                            "cabinCode": "Economy",
                                            "fareBasisCode": "JYYRAH"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "BND_MAD_MIA_20240403",
                            "originAirport": "MAD",
                            "destinationAirport": "MIA",
                            "originCity": "MAD",
                            "destinationCity": "MIA",
                            "startDate": "2024-04-03T10:00:00",
                            "endDate": "2024-04-04T12:24:00",
                            "fareFamilyCode": "ECO_STD_WW_L",
                            "sectors": [
                                {
                                    "id": "SEC_MAD_MIA_20240403",
                                    "originAirport": "MAD",
                                    "destinationAirport": "MIA",
                                    "startDate": "2024-04-03T10:00:00",
                                    "endDate": "2024-04-04T12:24:00",
                                    "elapsedDays": 1,
                                    "duration": 1944,
                                    "fareFamilyCode": "ECO_STD_WW_L",
                                    "segments": [
                                        {
                                            "id": "SEG_MAD_JFK_20240403",
                                            "originAirport": "MAD",
                                            "destinationAirport": "JFK",
                                            "marketingAirlineCode": "UX",
                                            "operatingAirlineCode": "DL",
                                            "flightNumber": "3391",
                                            "startDate": "2024-04-03T10:00:00",
                                            "endDate": "2024-04-03T12:30:00",
                                            "elapsedDays": 0,
                                            "duration": 510,
                                            "departureTerminal": "1",
                                            "arrivalTerminal": "4",
                                            "legs": [
                                                {
                                                    "id": "SEG_MAD_JFK_20240403",
                                                    "originAirport": "MAD",
                                                    "destinationAirport": "JFK",
                                                    "arrivalTerminal": "4",
                                                    "departureTerminal": "1",
                                                    "startDate": "2024-04-03T10:00:00",
                                                    "endDate": "2024-04-03T12:30:00",
                                                    "elapsedDays": 0,
                                                    "duration": 510,
                                                    "aircraftType": "764"
                                                }
                                            ],
                                            "layoverFollowing": {
                                                "startDate": "2024-04-03T12:30:00",
                                                "endDate": "2024-04-04T09:05:00",
                                                "arrivalTerminal": "4",
                                                "departureTerminal": "4",
                                                "changeOfAirport": false,
                                                "changeOfTerminal": false,
                                                "elapsedDays": 1,
                                                "duration": 1235
                                            },
                                            "rbd": "M",
                                            "cabinCode": "Economy",
                                            "fareBasisCode": "MLYRAE"
                                        },
                                        {
                                            "id": "SEG_JFK_MIA_20240404",
                                            "originAirport": "JFK",
                                            "destinationAirport": "MIA",
                                            "marketingAirlineCode": "DL",
                                            "flightNumber": "1698",
                                            "startDate": "2024-04-04T09:05:00",
                                            "endDate": "2024-04-04T12:24:00",
                                            "elapsedDays": 0,
                                            "duration": 199,
                                            "departureTerminal": "4",
                                            "legs": [
                                                {
                                                    "id": "SEG_JFK_MIA_20240404",
                                                    "originAirport": "JFK",
                                                    "destinationAirport": "MIA",
                                                    "departureTerminal": "4",
                                                    "startDate": "2024-04-04T09:05:00",
                                                    "endDate": "2024-04-04T12:24:00",
                                                    "elapsedDays": 0,
                                                    "duration": 199,
                                                    "aircraftType": "739"
                                                }
                                            ],
                                            "rbd": "K",
                                            "cabinCode": "Economy",
                                            "fareBasisCode": "MLYRAE"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                "contactDetails": {
                    "email": "kwarzel@pros.com",
                    "notificationNumber": {
                        "prefix": "+1",
                        "number": "3053056064"
                    }
                },
                "passengerDictionary": {
                    "1": {
                        "id": 1,
                        "gender": "FEMALE",
                        "type": "ADT",
                        "firstName": "Katharina",
                        "salutation": "MRS",
                        "lastName": "Warzel",
                        "secondLastName": "",
                        "dateOfBirth": "1990-03-26",
                        "travelDocument": {
                            "type": "P",
                            "number": "C4FX5VP2F",
                            "issueCountry": "DE",
                            "nationality": "DE",
                            "expirationDate": "2026-11-14"
                        },
                        "visaList": [],
                        "frequentFlyerProgram": "DL",
                        "frequentFlyerNumber": "9465866359"
                    }
                },
                "totalNumberOfPassengers": 1,
                "itineraryPortionDictionary": {
                    "BND_MAD_MIA_20240403": {
                        "id": "BND_MAD_MIA_20240403",
                        "level": "bound",
                        "originAirport": "MAD",
                        "destinationAirport": "MIA",
                        "startDate": "2024-04-03T10:00:00",
                        "endDate": "2024-04-04T12:24:00"
                    },
                    "SEC_MIA_MAD_20240326": {
                        "id": "SEC_MIA_MAD_20240326",
                        "level": "sector",
                        "originAirport": "MIA",
                        "destinationAirport": "MAD",
                        "startDate": "2024-03-26T22:45:00",
                        "endDate": "2024-03-27T12:05:00"
                    },
                    "ITY_MIA_MAD_20240326": {
                        "id": "ITY_MIA_MAD_20240326",
                        "level": "itinerary",
                        "originAirport": "MIA",
                        "destinationAirport": "MAD",
                        "startDate": "2024-03-26T22:45:00",
                        "endDate": "2024-04-04T09:05:00"
                    },
                    "BND_MIA_MAD_20240326": {
                        "id": "BND_MIA_MAD_20240326",
                        "level": "bound",
                        "originAirport": "MIA",
                        "destinationAirport": "MAD",
                        "startDate": "2024-03-26T22:45:00",
                        "endDate": "2024-03-27T12:05:00"
                    },
                    "SEC_MAD_MIA_20240403": {
                        "id": "SEC_MAD_MIA_20240403",
                        "level": "sector",
                        "originAirport": "MAD",
                        "destinationAirport": "MIA",
                        "startDate": "2024-04-03T10:00:00",
                        "endDate": "2024-04-04T12:24:00"
                    },
                    "SEG_MAD_JFK_20240403": {
                        "id": "SEG_MAD_JFK_20240403",
                        "level": "segment",
                        "originAirport": "MAD",
                        "destinationAirport": "JFK",
                        "startDate": "2024-04-03T10:00:00",
                        "endDate": "2024-04-03T12:30:00"
                    },
                    "SEG_MIA_MAD_20240326": {
                        "id": "SEG_MIA_MAD_20240326",
                        "level": "segment",
                        "originAirport": "MIA",
                        "destinationAirport": "MAD",
                        "startDate": "2024-03-26T22:45:00",
                        "endDate": "2024-03-27T12:05:00"
                    },
                    "SEG_JFK_MIA_20240404": {
                        "id": "SEG_JFK_MIA_20240404",
                        "level": "segment",
                        "originAirport": "JFK",
                        "destinationAirport": "MIA",
                        "startDate": "2024-04-04T09:05:00",
                        "endDate": "2024-04-04T12:24:00"
                    }
                },
                "passengersServices": [
                    {
                        "passengerId": 1,
                        "isInfant": false,
                        "serviceItineraryPortions": [
                            {
                                "itineraryPortionId": "SEG_MIA_MAD_20240326",
                                "serviceCategories": [
                                    {
                                        "code": "SEAT",
                                        "services": [
                                            {
                                                "itineraryPortionId": "SEG_MIA_MAD_20240326",
                                                "passengerId": 1,
                                                "serviceCategoryCode": "SEAT",
                                                "marketingServiceCategoryCode": "SEAT",
                                                "serviceCode": "SEAT",
                                                "unit": "PCE",
                                                "quantityToBook": 1,
                                                "quantityPurchased": 0,
                                                "maximumPurchasable": 1,
                                                "preOrdered": false,
                                                "selectedSeatNumber": "3G"
                                            }
                                        ]
                                    },
                                    {
                                        "code": "BAGGAGE",
                                        "services": [
                                            {
                                                "itineraryPortionId": "BND_MIA_MAD_20240326",
                                                "passengerId": 1,
                                                "serviceCategoryCode": "BAGGAGE",
                                                "marketingServiceCategoryCode": "BAGGAGE",
                                                "serviceCode": "XBAG",
                                                "unit": "PCE",
                                                "quantityToBook": 3,
                                                "quantityPurchased": 0,
                                                "maximumPurchasable": 0,
                                                "preOrdered": false,
                                                "price": 120,
                                                "currency": "EUR",
                                                "baggageCharacteristics": {
                                                    "weightKg": 23,
                                                    "weightLbs": 50,
                                                    "dimensionsTotalCm": 158,
                                                    "dimensionsTotalIn": 62
                                                }
                                            },
                                            {
                                                "itineraryPortionId": "BND_MIA_MAD_20240326",
                                                "passengerId": 1,
                                                "serviceCategoryCode": "BAGGAGE",
                                                "marketingServiceCategoryCode": "BAGGAGE",
                                                "serviceCode": "PDBG",
                                                "unit": "PCE",
                                                "quantityToBook": 1,
                                                "quantityPurchased": 0,
                                                "maximumPurchasable": 0,
                                                "preOrdered": false,
                                                "price": 100,
                                                "currency": "EUR",
                                                "baggageCharacteristics": {
                                                    "weightKg": 23,
                                                    "weightLbs": 50,
                                                    "dimensionsTotalCm": 158,
                                                    "dimensionsTotalIn": 62
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        "code": "SPORT",
                                        "services": [
                                            {
                                                "itineraryPortionId": "BND_MIA_MAD_20240326",
                                                "passengerId": 1,
                                                "serviceCategoryCode": "SPORT",
                                                "marketingServiceCategoryCode": "SPORT",
                                                "serviceCode": "BIKE",
                                                "unit": "PCE",
                                                "quantityToBook": 1,
                                                "quantityPurchased": 0,
                                                "maximumPurchasable": 0,
                                                "preOrdered": false,
                                                "price": 200,
                                                "currency": "EUR"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "itineraryPortionId": "SEG_MAD_JFK_20240403",
                                "serviceCategories": []
                            },
                            {
                                "itineraryPortionId": "SEG_JFK_MIA_20240404",
                                "serviceCategories": []
                            }
                        ]
                    }
                ],
                "passengersBaggageAllowance": [
                    {
                        "passengerId": 1,
                        "isInfant": false,
                        "baggageItineraryPortions": [
                            {
                                "itineraryPortionId": "BND_MIA_MAD_20240326",
                                "baggageAllowance": {
                                    "checkedBaggage": {
                                        "numberOfPieces": 2,
                                        "pieceOrWeightAllowance": "PIECE",
                                        "baggageCharacteristics": {
                                            "weightKg": 32,
                                            "weightLbs": 70,
                                            "dimensionsTotalCm": 158,
                                            "dimensionsTotalIn": 62
                                        }
                                    }
                                }
                            },
                            {
                                "itineraryPortionId": "BND_MAD_MIA_20240403",
                                "baggageAllowance": {
                                    "checkedBaggage": {
                                        "numberOfPieces": 1,
                                        "pieceOrWeightAllowance": "PIECE",
                                        "baggageCharacteristics": {
                                            "weightKg": 23,
                                            "weightLbs": 50,
                                            "dimensionsTotalCm": 158,
                                            "dimensionsTotalIn": 62
                                        }
                                    }
                                }
                            }
                        ]
                    }
                ],
                "passengersSpecialAssistance": [],
                "customizable": true,
                "bookingCompletionStep": "PAYMENT",
                "servicesToBook": [
                    {
                        "realCategoryCode": "SEAT",
                        "categoryCode": "SEAT",
                        "itineraryPortionId": "SEG_MIA_MAD_20240326",
                        "passengerId": 1,
                        "serviceCode": "SEAT",
                        "quantityPurchased": 0,
                        "quantity": 1,
                        "seatNumber": "3G",
                        "unit": "PCE",
                        "preOrdered": false
                    },
                    {
                        "realCategoryCode": "BAGGAGE",
                        "categoryCode": "BAGGAGE",
                        "itineraryPortionId": "BND_MIA_MAD_20240326",
                        "passengerId": 1,
                        "serviceCode": "XBAG",
                        "quantityPurchased": 0,
                        "quantity": 3,
                        "currency": "EUR",
                        "servicePrice": 120,
                        "unit": "PCE",
                        "preOrdered": false
                    },
                    {
                        "realCategoryCode": "BAGGAGE",
                        "categoryCode": "BAGGAGE",
                        "itineraryPortionId": "BND_MIA_MAD_20240326",
                        "passengerId": 1,
                        "serviceCode": "PDBG",
                        "quantityPurchased": 0,
                        "quantity": 1,
                        "currency": "EUR",
                        "servicePrice": 100,
                        "unit": "PCE",
                        "preOrdered": false
                    },
                    {
                        "realCategoryCode": "SPORT",
                        "categoryCode": "SPORT",
                        "itineraryPortionId": "BND_MIA_MAD_20240326",
                        "passengerId": 1,
                        "serviceCode": "BIKE",
                        "quantityPurchased": 0,
                        "quantity": 1,
                        "currency": "EUR",
                        "servicePrice": 200,
                        "unit": "PCE",
                        "preOrdered": false
                    }
                ],
                "prices": {
                    "passengersPrices": [
                        {
                            "passengerId": 1,
                            "infantPrices": false,
                            "airTransportationPrices": [
                                {
                                    "currency": "EUR",
                                    "airTransportationTotalAmount": 4664.1,
                                    "airTransportationTotalAmount2": {
                                        "cash": 4664.1
                                    },
                                    "airTransportationNetAmount": 3552,
                                    "airTransportationNetAmount2": {
                                        "cash": 3552
                                    },
                                    "airTransportationChargesAmount": 4568.01,
                                    "airTransportationChargesAmount2": {
                                        "cash": 4568.01
                                    },
                                    "taxTotalAmount": 96.09,
                                    "taxTotalAmount2": {
                                        "cash": 96.09
                                    },
                                    "taxes": [
                                        {
                                            "amount": 20.2,
                                            "amount2": {
                                                "cash": 20.2
                                            },
                                            "code": "JD"
                                        },
                                        {
                                            "amount": 0.63,
                                            "amount2": {
                                                "cash": 0.63
                                            },
                                            "code": "OG"
                                        },
                                        {
                                            "amount": 3.27,
                                            "amount2": {
                                                "cash": 3.27
                                            },
                                            "code": "QV"
                                        },
                                        {
                                            "amount": 10.36,
                                            "amount2": {
                                                "cash": 10.36
                                            },
                                            "code": "AY"
                                        },
                                        {
                                            "amount": 20.51,
                                            "amount2": {
                                                "cash": 20.51
                                            },
                                            "code": "US"
                                        },
                                        {
                                            "amount": 20.51,
                                            "amount2": {
                                                "cash": 20.51
                                            },
                                            "code": "US"
                                        },
                                        {
                                            "amount": 3.54,
                                            "amount2": {
                                                "cash": 3.54
                                            },
                                            "code": "XA"
                                        },
                                        {
                                            "amount": 6.47,
                                            "amount2": {
                                                "cash": 6.47
                                            },
                                            "code": "XY"
                                        },
                                        {
                                            "amount": 6.44,
                                            "amount2": {
                                                "cash": 6.44
                                            },
                                            "code": "YC"
                                        },
                                        {
                                            "amount": 4.16,
                                            "amount2": {
                                                "cash": 4.16
                                            },
                                            "code": "XF"
                                        }
                                    ],
                                    "fuelSurchargeTotalAmount": 1016.01,
                                    "fuelSurchargeTotalAmount2": {
                                        "cash": 1016.01
                                    },
                                    "fuelSurcharges": [
                                        {
                                            "amount": 1016.01,
                                            "amount2": {
                                                "cash": 1016.01
                                            },
                                            "code": "YQ"
                                        }
                                    ]
                                }
                            ],
                            "extraPrices": [
                                {
                                    "currency": "EUR",
                                    "amount": 200,
                                    "amount2": {
                                        "cash": 200
                                    },
                                    "serviceCode": "BIKE"
                                },
                                {
                                    "currency": "EUR",
                                    "amount": 100,
                                    "amount2": {
                                        "cash": 100
                                    },
                                    "serviceCode": "PDBG"
                                },
                                {
                                    "currency": "EUR",
                                    "amount": 120,
                                    "amount2": {
                                        "cash": 120
                                    },
                                    "serviceCode": "XBAG"
                                },
                                {
                                    "currency": "EUR",
                                    "amount": 120,
                                    "amount2": {
                                        "cash": 120
                                    },
                                    "serviceCode": "XBAG"
                                },
                                {
                                    "currency": "EUR",
                                    "amount": 120,
                                    "amount2": {
                                        "cash": 120
                                    },
                                    "serviceCode": "XBAG"
                                }
                            ]
                        }
                    ],
                    "unpaidTotalsPerCurrency": {
                        "EUR": {
                            "currency": "EUR",
                            "airTransportationTotalAmount": 4664.1,
                            "airTransportationNetTotalAmount": 3552,
                            "airTransportationChargesTotalAmount": 4568.01,
                            "taxTotalAmount": 96.09,
                            "fuelSurchargeTotalAmount": 1016.01,
                            "grandTotalAmount": 5324.1
                        }
                    },
                    "paidTotalsPerCurrency": {}
                }
            }
        },
        "gtm.uniqueEventId": 121
    }
]