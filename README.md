# getPropertyByValue
##Install
npm i --save get-property-by-value
##Usage
The utility returns the value for given property of the object if the property exists in a deeply nested object.

```
For e.g. 

const obj = {
    fauna: {
        mammals : {
            carnivores: {
                cat: ["lion"]
            }
        }
    }
}

console.log(getPropertyByValue(obj, "cat"));

// lion

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

console.log(getPropertyByValue(list, "type"));

//["carnivores", "marsupials"]
```