let address: any = {
    country:'korea',
    city: 'Seoul',
    address1: 'Gangnam-gu',
    address2: 'Sinsa-dong',
    address3: '789 street'
}
const { country, city, ...detail } = address
console.log(detail)

//{ address1: 'Gangnam-gu',
//  address2: 'Sinsa-dong',
//} address3: '789 street' }