import { OrderDTO } from '../dtos/OrderDTO';
import { CarePlusOrderDTO } from '../dtos/carePlusOrderDTO';
import { QuickCareOrderDTO } from '../dtos/QuickCareOrderDTO';

const mappings: { [key: string]: any } = {
    healthmartPayloadType: {
      id: 'id',
      product: 'healthMartProduct',
      quantity: 'healthMartQuantity',
      customerInfo: {
        customerName: 'healthMartCustName',
        customerAddress: 'healthMartCustAddress',
        customerCity: 'healthMartCustCity',
        customerState: 'healthMartCustState',
        customerZipcode: 'healthMartCustZipcode',
        customerCountry: 'healthMartCustCountry',
      },
    },

    careplusPayloadType: {
        id: 'id',
        product: 'carePlusProduct',
        quantity: 'carePlusQuantity',
        clientInfo: {
          customerName: 'carePlusclientName',
          customerAddress: 'carePlusclientAddress',
          customerCity: 'carePlusclientCity',
          customerState: 'carePlusclientState',
          customerZipcode: 'carePlusclientZipcode',
          customerCountry: 'carePlusclientCountry',
        },
    },

    quickcarePayloadType: {
      id: 'id',
      product: 'quickCareProduct',
      quantity: 'quickCareQuantity',
      userData: {
        customerName: 'quickCareuserName',
        customerAddress: 'quickCareuserAddress',
        customerCity: 'quickCareuserCity',
        customerState: 'quickCareuserState',
        customerZipcode: 'quickCareuserZipcode',
        customerCountry: 'quickCareuserCountry',
      },
  },

};

export class OrderMapper {

    static mapPayloadToDbFormat(payload: any, mapping: any): any {
        const dbFormatted: any = {};
        for (const [key, value] of Object.entries(mapping)) {
            if (typeof value === 'object') {
                dbFormatted[key] = this.mapPayloadToDbFormat(payload, value);
                } else {
                const newKey = mapping[key] || key;

                if (newKey.includes('Cust')) {
                    const nestedKey = 'customerInfo';
                    dbFormatted[newKey] = payload[key];
                }else if(newKey.includes('Client')){
                  console.log(newKey,"newKey");
                    const nestedKey = 'clientInfo';
                    dbFormatted[newKey] = payload[key];
                } else if(newKey.includes('User')){
                  console.log(newKey,"newKey");
                    const nestedKey = 'userData';
                    dbFormatted[newKey] = payload[key];
                }else {
                dbFormatted[newKey] = payload[key];
                }
            }
        }
        return dbFormatted;
    }
    
    static toDTO(payload: any, pharmacy: string): any {
      const mapping = mappings[`${pharmacy}PayloadType` as keyof typeof mappings];
      const mappedPayload = this.mapPayloadToDbFormat(payload, mapping);
      return mappedPayload;
    }

    static convertToOrderDTO(payload: any,pharmacy: string): any | null {
      console.log(payload,"payload");
      let orderDTO: OrderDTO;
      let carePlusOrderDTO:CarePlusOrderDTO;
      let quickCareOrderDTO:QuickCareOrderDTO;
      switch (pharmacy.toLowerCase()) {
          case 'healthmart':
            return orderDTO = {
              id: 0,
              product: payload.healthMartProduct,
              quantity: payload.healthMartQuantity,
              customerInfo: {
                name: payload.healthMartCustomerInfo.healthMartCustName,
                address: payload.healthMartCustomerInfo.healthMartCustAddress,
                city: payload.healthMartCustomerInfo.healthMartCustCity,
                state: payload.healthMartCustomerInfo.healthMartCustState,
                zipcode: payload.healthMartCustomerInfo.healthMartCustZipcode,
                country: payload.healthMartCustomerInfo.healthMartCustCountry,
              },
            };
          case 'careplus':
            return carePlusOrderDTO = {
                  id: 0,
                  product: payload.carePlusProduct,
                  quantity: payload.carePlusQuantity,
                  clientInfo: {
                    name: payload.carePlusClientInfo.carePlusClientName,
                    address: payload.carePlusClientInfo.carePlusClientAddress,
                    city: payload.carePlusClientInfo.carePlusClientCity,
                    state: payload.carePlusClientInfo.carePlusClientState,
                    zipcode: payload.carePlusClientInfo.carePlusClientZipcode,
                    country: payload.carePlusClientInfo.carePlusClientCountry,
                  },
              };
            case 'quickcare':
              return quickCareOrderDTO = {
                    id: 0,
                    product: payload.quickCareProduct,
                    quantity: payload.quickCareQuantity,
                    userData: {
                      name: payload.quickCareUserData.quickCareUserName,
                      address: payload.quickCareUserData.quickCareUserAddress,
                      city: payload.quickCareUserData.quickCareUserCity,
                      state: payload.quickCareUserData.quickCareUserState,
                      zipcode: payload.quickCareUserData.quickCareUserZipcode,
                      country: payload.quickCareUserData.quickCareUserCountry,
                    },
                };
          default:
            return null;
        }
      return orderDTO;
    }

}