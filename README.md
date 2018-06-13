# emDataStandards

Data standards are the rules by which data are described and recorded. In order to share, exchange, and understand data, we must standardize the format as well as the meaning.

## Why do we need Data Standards?
Using standards makes using things easier. Standards provide data integrity, accuracy and consistency, clarify ambiguous meanings, minimize redundant data, and document business rules. The data become usable to more than just the project or person that created the data, because you know the data will be in an expected format and you know what is represented by the data.
 
## Why does EveryMundo develop its own Data Standards?
EveryMundo develops its own technology and integrates with international airlines around the world who use different technologies. EveryMundo’s internal departments can create superior products through efficient collaboration by speaking the same language - data standards. It is best practice to leverage existing data standards where applicable. EveryMundo created its own standards based on NDC  (New Distribution Capability) and Schema.org.
 
**NDC** is a travel industry-supported program launched by IATA for the development and market adoption of a new, XML-based data transmission standard (NDC Standard).
The NDC Standard enhances the capability of communications between airlines and travel agents.

**Schema.org** is a collaborative, community activity with a mission to create, maintain, and promote schemas for structured data on the Internet, on web pages, in email messages, and beyond. Founded by Google, Microsoft, Yahoo and Yandex, Schema.org vocabularies are developed by an open community process.
 
## How were the standards developed?
1. Review IATA NDC documentation
   - http://startndc.iata.org/education.htm
   - http://www.iata.org/whatwedo/airline-distribution/ndc/Documents/ndc-implementation-guide.pdf
   - How this applies to ancillary products delivered by third party suppliers (e.g. a nonairline controlled lounge), or for non-flight related products such as packaging a flight with a hotel or car, is outside the scope of NDC. The Master dataLayer includes a structure supporting vacation packages.
2. Use [schema.org](schema.org) as the basis for variable definition; schema.org vocabulary was founded by major companies - Google, Microsoft, Yandex, Yahoo
   - Inherit data structure from schema.org:
     - property
     - propertyType
       - Note: "@type" used for illustration purposes and will not be used in real data
     - variable

## How to get started

### Documentation 
https://everymundo.github.io/emDataStandards/documentation/build/

#### Deploy to gihub pages manually

**Note:** These commands assume that you have committed already all your changes in master. For Windows, run the commands in git bash.

```bash
cd documentation
npm run build
git add .
git commit -m 'new documentation automatic generated'
git checkout gh-pages
git pull origin gh-pages
git merge master
git push origin gh-pages
git checkout master
```

### Field Naming Convention
- Follow the [Google Java Style Guide](https://google.github.io/styleguide/javaguide.html)
  - Lower camel case
  - No space or underscore in field
  - Example: **airportIataCode**
- Only use field names without the parent if unambiguous by itself. For example: It is acceptable to use siteEdition instead of pageSiteEdition
````
"page": {
  "siteEdition": "en-US"
}
````
If the field name is being used in multiple properties, combine parent property and field name capitalizing the first letter of the field name, e.g. airlineIataCode
````
"airline":{
	"name": "Xiamen Air"
}

"city": {
	"name": "San Francisco"
}
````

### Field Output Naming Convention
- Variable output follows [ISO](https://www.iso.org/home.html) (International Organization for Standardization)
  - Example: [ISO 639-1](http://www.loc.gov/standards/iso639-2/php/code_list.php) language codes
- Variable output follows industry standards
  - [IATA Airline and Airport Codes](http://www.iata.org/publications/Pages/code-search.aspx)
- Populate variable with null if not available
- User upper case and underscore for defined list of output values, otherwise use upper camel case: fareClass (ECONOMY, BUSINESS, FIRST), journeyType, flightType, routeType
- Use comma (",") to separate list items when together in a string. Use | as a fall back. 
- **priceSpecification**
  - If price has value & taxPrice equals null, then totalPrice does not include taxes
  - If price & taxPrice equal null, then totalPrice includes taxes

**Notes:**
- In JSON, numbers do not require formatting rules, unless there is a need to be very strict, e.g. miles can only be an integer.
- **Tracking:**
  - Due to character limits in Google Analytics event tracking, [tracking.schema.json](https://github.com/EveryMundo/emDataStandards/blob/master/types/tracking.schema.json) documents acceptable exceptions to emDataStandards

## Stack
[Doca A CLI tool that scaffolds API documentation based on JSON HyperSchemas.](https://github.com/cloudflare/doca)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
