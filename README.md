# get-object-property-values

##Install
npm i --save get-property-by-value

##Usage
The utility returns the value for given property of the object if the property exists in a deeply nested object.

##Options
The functions has 3 parameters. 
- list - could be list of objects or a single object.
- property - the property of the object.
- unique - Boolean value, if specified with the list option gives unique set of values in the array of object for the given property.
```
getPropertyByValue(list, property, unique);
```

```
For e.g. 

const obj = {
    fauna: {
        mammals : {
            carnivores: {
                family: cat
            }
        }
    }
}

console.log(getPropertyByValue(obj, "fauna.mammals.carnivores.family"));

// cat

const list = [
        {
            fauna: {
                mammals : {
                    type: carnivores,
                    example: cat: ["lion"]
                }
            }
        },
        {
            fauna: {
                mammals : {
                    type: marsupials,
                    example: cat: ["kangaroo"]
                    }
                }
            }
        }
    ]

console.log(getPropertyByValue(list, "fauna.mammals.type"));

//["carnivores", "marsupials"]
```

