export class Event {
    exampleVar: string;

    constructor(data: any) {
        if (typeof data == "string") data = JSON.parse(data);
        for (var key in data) this[key] = data[key];
    }
}

// based on user.model.ts from mask