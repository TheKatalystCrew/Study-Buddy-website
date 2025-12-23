
export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface TrialFormData {
  fullName: string;
  phoneNumber: string;
  grade: string;
  email: string;
}
