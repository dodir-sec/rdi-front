import { httpService } from './http.service'

export const targetService = {
    query,
    getById,
    scan,
    add,
    update,
    remove
}

async function query() {
    try {
        return await httpService.get('domains')
    } catch (error) {
        console.log('Error in targetService.query:', error)
    }
}

async function getById(id) {
    try {
        return await httpService.get(`targets/${id}`)
    } catch (error) {
        console.log('Error in targetService.getById:', error
        )
    }
}

async function scan(domain) {
    try {
        return await httpService.get(`targets/scan/${domain}`)
    } catch (error) {
        console.log('Error in targetService.scan:', error)
    }
}

async function add(target) {
    try {
        return await httpService.post('targets', target)
    } catch (error) {
        console.log('Error in targetService.add:', error)
    }
}

async function update(target) {
    try {
        return await httpService.put(`targets/${target._id}`, target)
    } catch (error) {
        console.log('Error in targetService.update:', error)
    }
}

async function remove(id) {
    try {
        return await httpService.delete(`targets/${id}`)
    } catch (error) {
        console.log('Error in targetService.remove:', error)
    }
}



