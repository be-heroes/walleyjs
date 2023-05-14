import {IBiometricPayload} from "../IBiometricPayload";

export interface IIrisAuthenticationPayload extends IBiometricPayload {
    tag_device_id: string;
    process_only: boolean;
    reason_encode: ReasonEncode;
    image_def: {
        width: number;
        height: number;
        eye_type: EyeType;
        image_tag: string;
        image_format: string;
        gaze_flag: number;
        image_buffer: { length: number, data: string }
    }
}


export enum EyeType {
    Left,
    Right
}

export enum ReasonEncode {
    Enroll
}