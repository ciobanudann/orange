export type BookVolumeAccessInfo = {
  accessViewStatus: string;
  country: string;
  embeddable: boolean;
  epub: {
    isAvailable: boolean;
  };
  pdf: {
    isAvailable: boolean;
  };
  publicDomain: boolean;
  quoteSharingAllowed: boolean;
  textToSpeechPermission: string;
  viewability: string;
  webReaderLink: string;
};

export type BookVolumeSearchInfo = {
  textSnippet?: string;
};

export type BookVolumeSaleInfo = {
  country: string;
  isEbook: boolean;
  seleability: string;
};

export type BookVolumeInfoImageLinks = {
  smallThumbnail?: string;
  thumbnail?: string;
};

export type BookVolumeInfoPanelizationSummary = {
  containsEpubBubbles: boolean;
  containsImageBubbles: boolean;
};

export type ReadingModes = {
  image: boolean;
  text: string;
};
export type IndustryIdentifier = { identifier: string; type: string };
export type BookVolumeInfo = {
  allowAnonLogging: false;
  canonicalVolumeLink: string;
  categories: string[];
  contentVersion: string;
  imageLinks: BookVolumeInfoImageLinks;
  description?: string;
  infoLink: string;
  language: string;
  maturityRating: string;
  pageCount: number;
  panelizationSummary: BookVolumeInfoPanelizationSummary;
  industryIdentifiers: IndustryIdentifier[];
  previewLink: string;
  printType: string;
  publishedDate: string;
  readingModes: ReadingModes;
  title: string;
  subtitle?: string;
};

export type BookVolume = {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  accessInfo: BookVolumeAccessInfo;
  searchInfo: BookVolumeSearchInfo;
  saleInfo: BookVolumeSaleInfo;
  volumeInfo: BookVolumeInfo;
};

export type GetBookVolumesResponse = {
  items?: BookVolume[];
  kind: string;
  totalItems: number;
};

export type GetBookVolumeResponse = Omit<BookVolume, "searchInfo">;
