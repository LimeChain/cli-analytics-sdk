import axios, { Method, AxiosResponse, AxiosRequestConfig }  from 'axios';
import * as config from './config.json';

class CliAnalytics {

    id: string
    url: string

    constructor (options) {
        this.id = options.id
        this.url = options.url
    }

    async recordCommand(command: string, metadata?: Array<any>) { 
        await axios({
            headers: {[config.app_id_key]: this.id},
            method: 'POST',
            url: this.url,
            data: {
                type: command,
                metadata: metadata
            }
        });
    }

    async readData(commandType:string): Promise<AxiosResponse> {
        let resource = await axios({
            headers: {[config.app_id_key]: this.id},
            method: 'GET',
            url: `${this.url}/${commandType}`
        });

        return resource.data
    }
}

export default CliAnalytics
