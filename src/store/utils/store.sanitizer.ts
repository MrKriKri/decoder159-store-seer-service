import { IContact } from "interface/store/contact"
import { IPayment_method } from "interface/store/payment-method"
import { IProfile } from "interface/store/profile"
import { IVideo } from '../../../interface/store/video';

export class StoreSeerSanitizer {
    static sanitizePaymentMethods(payload: IPayment_method[]): IPayment_method[] {
        if (!payload) {
            return []
        }

        return payload
    }

    static sanitizeVideo(payload: IVideo[]): IVideo[] {
        if (!payload) {
            return []
        }

        return payload
    }

    static sanitizePaymentMethod(payload: IPayment_method): IPayment_method {
        if (!payload) {
            return {} as IPayment_method
        }

        return payload
    }

    static sanitizeContact(payload: IContact): IContact {
        if (!payload) {
            return {
                display_phone_number: '',
                email: '',
                facebook_name: '',
                facebook_url: '',
                instagram_name: '',
                instagram_url: '',
                line_id: '',
                line_url: '',
                phone_number: '',
            }
        }

        return {
            display_phone_number: payload.display_phone_number ?? '',
            email: payload.email ?? '',
            facebook_name: payload.facebook_name ?? '',
            facebook_url: payload.facebook_url ?? '',
            instagram_name: payload.instagram_name ?? '',
            instagram_url: payload.instagram_url ?? '',
            line_id: payload.line_id ?? '',
            line_url: payload.line_url ?? '',
            phone_number: payload.phone_number ?? '',
        }
    }

    static sanitizeProfile(payload: IProfile): IProfile {
        if (!payload) {
            return {
                name: '',
                slug: '',
                address: {
                    line1: '',
                    line2: '',
                    subdistrict: '',
                    district: '',
                    province: '',
                    country: '',
                    zipCode: ''
                },
                banner_url: [],
                logo_url: '',
            }
        }

        return {
            name: payload.name ?? '',
            slug: payload.slug ?? '',
            address: payload.address ?? {
                line1: '',
                line2: '',
                subdistrict: '',
                district: '',
                province: '',
                country: '',
                zipCode: ''
            },
            banner_url: payload.banner_url.length > 0 ? payload.banner_url : [],
            logo_url: payload.logo_url ?? '',
        }
    }
}
