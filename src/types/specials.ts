
export interface Special {
    details: string;
    restaurant: Restaurant;
    title: string;
    lat: number;
    lng: number;
    placeId: string;
    days: string[];
    limitedTimeOnly?: boolean;
    recurring?: boolean;
    dateRange?: {
        dateStart: Date;
        dateEnd: Date;
    }
    timeRange?: {
        allDay: boolean; /** if true, no need for timeStart and timeEnd, if false, provide timeStart and timeEnd */
        timeStart?: Date;
        timeEnd?: Date;
    }
}

export interface Restaurant {
    address: string;
    city: string;
    name: string;
    state: string;
    zip: string;
};
export interface Place extends google.maps.Place {

}

/**
 * there isn't a hard defined model for this kind of thing
 * need more properties
 * a deal can occur on multiple days of the week every week (recurring)
 * it could occur in a range of dates (limited time only)
 * if it is limited time only a date range must be selected
 * if it is recurring then we have to make it 'active' every week on that day / time
 */