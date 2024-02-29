[text](products.schema.md) [text](products.schema.ts)---
_stripe_product_id: 
_stripe_price_id: 

draft: false 

seo:
  title:
  description:
  image:
    src: 
    

title: 
summary: 
images:
  - src:
    
categories:
  - 

price: 
options:
  - key: 
    values:
      - value: 
        fee: 
      - value: 
        fee:

_inputs:
  summary:
    type: textarea
  price:
    type: number
  key:
    type: select
    comment: De naam van de optie, bijvoorbeeld 'kleur' of 'maat'
    options:
      allow_create: true
      values:
        - kleur
        - maat
  fee:
    type: number
    comment: De extra prijs bovenop de prijs van het product
  value:
    type: number
    comment: De waarde van de optie, bijvoorbeeld 'rood' of 'M'
---