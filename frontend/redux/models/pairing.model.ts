export interface PairingError {
    Code: number;
    Message: string;
}

export interface PairingOptions {
    Extend?: boolean;
    Retry?: boolean;
    Cancel?: boolean;
}

export interface PairingConfig {
    id: string;
    wearable_id: string;
    participant_id?: string;
    pin?: string;
    timeout: number;
    success?: boolean;
    pairingError?: PairingError;
    pairingOptions?: PairingOptions;
}
