/*http://sem1234-001-site1.etempurl.com*/

export default class HitService {
    static async registrationUser(email, password, passwordRepeat, key = null) {
        const str = `http://sem1234-001-site1.etempurl.com/api/User?email=${email}&password=${password}&passwordRepeat=${passwordRepeat}${key !== null ? "&key=" + key : ""}`;
        const response = await fetch(str, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}
        })
        return response.status === 201;
    }
    static async loginUser(email, password) {
        const str = `http://sem1234-001-site1.etempurl.com/api/User/${email}/${password}`;
        const response = await fetch(str)
        return await response.json()
    }
    static async isAdmin(id) {
        const str = `http://sem1234-001-site1.etempurl.com/api/User/isAdmin?id=${id}`;
        const response = await fetch(str)
        if (response.status === 404 || response.status === 400)
            return null;
        return await response.json();
    }
    static async getUsers(id) {
        const str = `http://sem1234-001-site1.etempurl.com/api/User/all?idAdmin=${id}`;
        const response = await fetch(str)
        return await response.json()
    }
    static async createUser(el, idAdmin) {
        const str = `http://sem1234-001-site1.etempurl.com/api/User/admin?idAdmin=${idAdmin}`;
        const response = await fetch(str, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(el)
        })
        return response.status === 200;
    }
    static async updateUser(el, idAdmin) {
        const str = `http://sem1234-001-site1.etempurl.com/api/User/admin?idAdmin=${idAdmin}`;
        const response = await fetch(str, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(el)
        })
        return response.status === 200;
    }
    static async deleteUser(id, idAdmin) {
        const str = `http://sem1234-001-site1.etempurl.com/api/User?id=${id}&idAdmin=${idAdmin}`;
        const response = await fetch(str, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
        })
        return response.status === 200;
    }



    static async getRegions() {
        const response = await fetch(`http://sem1234-001-site1.etempurl.com/api/Region/all`)
        return await response.json()
    }
    static async createRegion(el, idAdmin) {
        const str = `http://sem1234-001-site1.etempurl.com/api/Region?idAdmin=${idAdmin}`;
        const response = await fetch(str, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(el)
        })
        return response.status === 200;
    }
    static async updateRegion(el, idAdmin) {
        const str = `http://sem1234-001-site1.etempurl.com/api/Region?idAdmin=${idAdmin}`;
        const response = await fetch(str, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(el)
        })
        return response.status === 200;
    }
    static async deleteRegion(id, idAdmin) {
        const str = `http://sem1234-001-site1.etempurl.com/api/Region?id=${id}&idAdmin=${idAdmin}`;
        const response = await fetch(str, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
        })
        return response.status === 200;
    }

    static async getHeadings() {
        const response = await fetch(`http://sem1234-001-site1.etempurl.com/api/Headings/all`)
        return await response.json()
    }
    static async createHeadings(el, idAdmin) {
        const str = `http://sem1234-001-site1.etempurl.com/api/Headings?idAdmin=${idAdmin}`;
        const response = await fetch(str, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(el)
        })
        return response.status === 200;
    }
    static async updateHeadings(el, idAdmin) {
        const str = `http://sem1234-001-site1.etempurl.com/api/Headings?idAdmin=${idAdmin}`;
        const response = await fetch(str, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(el)
        })
        return response.status === 200;
    }
    static async deleteHeadings(id, idAdmin) {
        const str = `http://sem1234-001-site1.etempurl.com/api/Headings?id=${id}&idAdmin=${idAdmin}`;
        const response = await fetch(str, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
        })
        return response.status === 200;
    }

    static async getAdvertisements() {
        const response = await fetch(`http://sem1234-001-site1.etempurl.com/api/Advertisement/all`)
        return (await response.json())
    }
    static async createAdvertisements(el, idAdmin) {
        const str = `http://sem1234-001-site1.etempurl.com/api/Advertisement?idAdmin=${idAdmin}`;
        const response = await fetch(str, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(el)
        })
        return response.status === 200;
    }
    static async updateAdvertisements(el, idAdmin) {
        const str = `http://sem1234-001-site1.etempurl.com/api/Advertisement?idAdmin=${idAdmin}`;
        const response = await fetch(str, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(el)
        })
        return response.status === 200;
    }
    static async deleteAdvertisements(id, idAdmin) {
        console.log(id)
        console.log(idAdmin)
        const str = `http://sem1234-001-site1.etempurl.com/api/Advertisement?id=${id}&idAdmin=${idAdmin}`;
        const response = await fetch(str, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
        })
        return response.status === 200;
    }
}