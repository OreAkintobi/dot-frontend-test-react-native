export interface I_Nominee {
  title: string;
  photoUrL: string;
  id: string;
}

export interface I_AwardCategory {
  id: string;
  items: I_Nominee[];
  title: string;
}

export interface I_Root_Response {
  items: I_AwardCategory[];
}
