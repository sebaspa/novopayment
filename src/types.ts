export interface Option {
  name?: string | undefined;
  options: [0]
}


export interface Menu {
  code: number;
  data: Data;
}

export interface Data {
  list: List[];
}

export interface List {
  card_list: any[];
  pays_transfer: PaysTransfer[];
  support: Support[];
  enterprises: any[];
}

export interface PaysTransfer {
  between_cards: any[];
  banks: any[];
  credit_card: CreditCard[];
}

export interface CreditCard {
  visa: any[];
  master_card: any[];
}

export interface Support {
  lock: any[];
  change_pass: any[];
}
