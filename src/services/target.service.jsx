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
        return await httpService.get(`domains/${id}`)
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
        return await httpService.post('domains', target)
    } catch (error) {
        console.log('Error in targetService.add:', error)
    }
}

async function update(target) {
    try {
        return await httpService.put(`domains/${target._id}`, target)
    } catch (error) {
        console.log('Error in targetService.update:', error)
    }
}

async function remove(id) {
    try {
        return await httpService.delete(`domains/${id}`)
    } catch (error) {
        console.log('Error in targetService.remove:', error)
    }
}



