export type AccessInfoData = {
  venue: {
    name: string;
    address: string;
    building: string;
    floor: string;
    boothNumber: string;
  };
  transportation: {
    train: {
      title: string;
      routes: {
        line: string;
        station: string;
        walkingTime: string;
        description?: string;
      }[];
    };
    car: {
      title: string;
      parking: string;
      directions: string[];
    };
    bus: {
      title: string;
      routes: {
        from: string;
        to: string;
        time: string;
      }[];
    };
  };
  mapInfo: {
    coordinates?: string;
    nearbyLandmarks: string[];
    entranceInfo: string;
  };
  eventDates: string;
  contactInfo?: string;
};
