describe("Example e2e test", function() {
	var ptor = protractor.getInstance();

	it("should display the page title", function() {
		ptor.get("/");
		expect(ptor.getTitle()).toBe("Review Assist");
	});
});