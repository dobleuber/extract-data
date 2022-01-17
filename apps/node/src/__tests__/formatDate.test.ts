import formatDate from "../formatDate";

describe("formatDate", () => {
    it("should return a string", () => {
        expect(typeof formatDate(new Date())).toBe("string");
    });

    it("should return a string with the correct format", () => {
        const date = new Date();
        date.setMonth(0);
        date.setDate(1);
        expect(formatDate(date)).toBe("January 1");
    })
})