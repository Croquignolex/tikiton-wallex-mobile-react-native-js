import { getTimezoneName } from './functionsHelper'

export const apiUrl = 'http://api.wallex.cm:8000/api/';

export const headers = {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache'
};

export const parameters = {
    api_token: 'd5f66a06ec809d70d0c52842df8dc0011d7d1ad0f2d56f50d3123da17a2489fe',
    tz: getTimezoneName(),
    lang: 'fr'
};


