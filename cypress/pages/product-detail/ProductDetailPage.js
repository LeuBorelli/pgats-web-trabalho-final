class ProductDetailPage {
    elements = {
        productInformation: () => cy.get('.product-information'),
        productName: () => cy.get('.product-information h2'),
        productCategory: () => cy.get('.product-information p:contains("Category:")'),
        productPrice: () => cy.get('.product-information span:contains("Rs.")'),
        productAvailability: () => cy.get('.product-information p:contains("Availability:")'),
        productCondition: () => cy.get('.product-information p:contains("Condition:")'),
        productBrand: () => cy.get('.product-information p:contains("Brand:")')
    }

    verificarDetalhesProdutoVisiveis() {
        cy.url().should('include', '/product_details/')
        
        this.elements.productInformation().should('be.visible')
        this.elements.productName().should('be.visible')
        this.elements.productCategory().should('be.visible')
        this.elements.productPrice().should('be.visible')
        this.elements.productAvailability().should('be.visible')
        this.elements.productCondition().should('be.visible')
        this.elements.productBrand().should('be.visible')
    }
}

export default new ProductDetailPage()