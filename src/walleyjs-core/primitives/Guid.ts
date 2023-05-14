export class Guid {
    constructor(private guid: string)
    {
        this.guid = guid;
    }

    toString(): string
    {
        return this.guid;
    }

    static makeNew(): Guid
    {
        let result = "";

        for (let j = 0; j < 32; j++)
        {
            if (j === 8 || j === 12 || j === 16 || j === 20)
                result = result + "-";

            result = result + Math.floor(Math.random() * 16).toString(16);
        }

        return new Guid(result.toUpperCase());
    }
}