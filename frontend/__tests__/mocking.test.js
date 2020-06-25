function Person(name, foods) {
    this.name = name;
    this.foods = foods;
}
//simulates an API
Person.prototype.fetchFavFoods = function () {
     return new Promise((resolve, reject) => {
        setTimeout(() => resolve(this.foods), 2000);
    })
};

describe('mocking learning', () => {
    it('can create a person', () => {
        const me = new Person('Madison', ['coffee', 'cookies']);
        expect(me.name).toBe('Madison');
    });

    it('can fetch foods', async () => {
        const me = new Person('Madison', ['coffee', 'cookies']);
        //mock the favfood function
        me.fetchFavFoods = jest.fn().mockResolvedValue(
            ['sushi','ramen']
        )
        const favFoods = await me.fetchFavFoods();
        expect(favFoods).toContain('sushi');
    });
});