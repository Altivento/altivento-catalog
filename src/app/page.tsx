import CatalogSection from './components/CatalogSection';
import ProductCard from './components/ProductCard';
import PrintButton from './components/PrintButton';
import PaletteView from './components/PaletteView';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="print-bg bg-sand p-8 rounded-lg mb-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-forest max-w-4xl mx-auto md:mx-0">Catálogo de Productos y Servicios</h1>
        
        <div className="mt-6">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">Quiénes Somos</h2>
          <p className="text-text leading-relaxed max-w-3xl">
            En Altivento, llevamos más de 30 años creando estructuras memorables para eventos sociales y corporativos.
          </p>
          <p className='text-text leading-relaxed max-w-3xl'>
            Nos especializamos en la renta e instalación de carpas, pistas de baile, entarimados, templetes, graderías y plantas 
            de luz, ofreciendo soluciones a la medida con compromiso, experiencia y una capacidad única para adaptarnos a los 
            retos de cada montaje.
          </p>
          <p className="text-text leading-relaxed max-w-3xl">Nuestra prioridad es que cada evento tenga una base sólida y espectacular.</p>
        </div>
      </div>

      <CatalogSection
        title="Carpas"
        description="Nuestras carpas están disponibles en anchos de 10, 15 y 20 metros de boca, con largos en incrementos de 5 metros. Nota: Las carpas de 20 metros de ancho tienen un costo adicional del 15% sobre el precio base."
      >
        <ProductCard
          title="Carpa con plafón liso blanco"
          details={[
            { price: "$65/m²", text: "A 4m de altura" },
            { price: "$70/m²", text: "A 5m de altura" }
          ]}
          imagePath="images/carpa-plafon-liso-blanco.jpg"
          imageAlt="Carpa con plafón liso blanco"
        />
        <ProductCard
          title="Carpa con plafón liso negro"
          details={[
            { price: "$70/m²", text: "A 4m de altura" },
            { price: "$75/m²", text: "A 5m de altura" }
          ]}
          imagePath="images/carpa-plafon-liso-negro.jpg"
          imageAlt="Carpa con plafón liso negro"
        />
        <ProductCard
          title="Carpa alemana con plafón en V plisado"
          details={[
            { text: "Disponible en blanco, negro o ivory" },
            { price: "$85/m²", text: "A 4m de altura" },
            { price: "$90/m²", text: "A 5m de altura" }
          ]}
          imagePath="images/carpa-alemana-v-ivory.jpg"
          imageAlt="Carpa alemana con plafón en V plisado"
        />
        <ProductCard
          title="Carpa con plafón en olas ivory"
          details={[
            { text: "Solo disponible a 5m de altura" },
            { price: "$90/m²" }
          ]}
          imagePath="images/carpa-olas-ivory.jpeg"
          imageAlt="Carpa con plafón en olas ivory"
        />
        <ProductCard
          title="Carpa con plafón de botón en diferentes colores"
          details={[
            { text: "Solo disponible a 5m de altura" },
            { price: "$110/m²" }
          ]}
          imagePath="images/carpa-boton-blanco.jpeg"
          imageAlt="Carpa con plafón de botón"
        />
        <ProductCard
          title="Carpa transparente"
          details={[
            { text: "Solo a 5m de altura" },
            { price: "$110/m²" }
          ]}
          imagePath="images/carpa-transparente.jpg"
          imageAlt="Carpa transparente"
        />
      </CatalogSection>

      <div className="page-break-before"></div>

      <CatalogSection
        title="Pistas de Baile"
      >
        <ProductCard
          title="Pista de piso laminado"
          details={[
            { price: "$150/m²", text: "Acabado profesional de alta calidad" }
          ]}
          imagePath="images/pista-laminada.jpg"
          imageAlt="Pista de piso laminado"
        />
        <ProductCard
          title="Pista de duela de madera natural"
          details={[
            { price: "$150/m²", text: "Acabado de madera" }
          ]}
          imagePath="images/pista-duela-madera.jpg"
          imageAlt="Pista de piso laminado"
        />
        <ProductCard
          title="Pista de charol"
          details={[
            { price: "$150/m²", text: "Acabado brillante tipo espejo" }
          ]}
          imagePath="images/pista-charol-negro.jpg"
          imageAlt="Pista de charol"
        />
        <ProductCard
          title="Pista pintada (1 color)"
          details={[
            { price: "$125/m²", text: "Personalizable en color sólido" }
          ]}
          imagePath="images/pista-pintada.jpeg"
          imageAlt="Pista pintada"
        />
        <ProductCard
          title="Pista con diseño personalizado"
          details={[
            { price: "desde $333/m²", text: "Diseños personalizados para su evento" }
          ]}
          imagePath="images/pista-diseño-personalizado.jpg"
          imageAlt="Pista con diseño personalizado"
        />
      </CatalogSection>

      <CatalogSection
        title="Entarimados"
      >
        <ProductCard
          title="Entarimado estándar"
          details={[
            { price: "$85/m²", text: "Con pintura nueva, enmascarillado, nivelado al piso" }
          ]}
          imagePath="images/entarimado-estandard.jpeg"
          imageAlt="Entarimado estándar"
        />
      </CatalogSection>

      <div className="page-break-before"></div>

      <CatalogSection
        title="Templetes"
        description="Disponibles en alturas de 30 cm, 50 cm, 70 cm, 100 cm, 120 cm y 150 cm"
      >
        <ProductCard
          title="Templete hasta 1m"
          details={[
            { price: "$125/m²", text: "Ideal para presentaciones y escenarios pequeños" }
          ]}
          imagePath="images/templete-1m.jpeg"
          imageAlt="Templete hasta 1m"
        />
        <ProductCard
          title="Templete de 120cm a 150cm"
          details={[
            { price: "$150/m²", text: "Para mayor visibilidad en eventos grandes" }
          ]}
          imagePath="images/templete-15m.jpeg"
          imageAlt="Templete de 120cm a 150cm"
        />
      </CatalogSection>

      <CatalogSection
        title="Estrados Especiales"
      >
        <ProductCard
          title="Estrado basico para novios o quinceañera"
          details={[
            { price: "$2500", text: "2.44m x 3.66m a doble altura" }
          ]}
          imagePath="images/estrado.jpeg"
          imageAlt="Estrado para novios o quinceañera"
        />
        <ProductCard
          title="Estrado premium para novios o quinceañera"
          details={[
            { price: "$ Precio según diseño", text: "Sobre diseño" }
          ]}
          imagePath="images/estrado-premium.jpeg"
          imageAlt="Estrado para novios o quinceañera"
        />
      </CatalogSection>

      <div className="page-break-before"></div>

      <CatalogSection
        title="Graderías"
      >
        <ProductCard
          title="Graderías para fotografía"
          details={[
            { price: "$2,000 por módulo", text: "Capacidad de 40 personas por módulo" }
          ]}
          imagePath="images/graderias-fotografia.jpeg"
          imageAlt="Graderías para fotografía"
        />
        <ProductCard
          title="Graderías para espectadores"
          details={[
            { price: "$2,000 por módulo", text: "Capacidad de 25 personas por módulo" }
          ]}
          imagePath="images/graderias-espectadores.jpeg"
          imageAlt="Graderías para espectadores"
        />
      </CatalogSection>

      <CatalogSection
        title="Plantas de Luz"
        description="Incluyen cable de 30m y centro de carga."
      >
        <ProductCard
          title="Planta de 45 KVA"
          details={[
            { price: "$5,500 por 8 horas", text: "Ideal para eventos medianos" }
          ]}
          imagePath="images/planta-45-kva.jpeg"
          imageAlt="Planta de 45 KVA"
        />
        <ProductCard
          title="Planta de 70 KVA"
          details={[
            { price: "$6,000 por 8 horas", text: "Para eventos grandes con altos requerimientos de energía" }
          ]}
          imagePath="images/planta-70-kva.jpeg"
          imageAlt="Planta de 70 KVA"
        />
      </CatalogSection>

      <div className="page-break-before"></div>

      <CatalogSection
        title="Servicios Especiales"
      >
        <ProductCard
          title="Tapado de Albercas - Pintado"
          details={[
            { price: "desde $200/m²", text: "Costo variable según complejidad, área y profundidad" }
          ]}
          imagePath="images/tapado-de-albercas.jpeg"
          imageAlt="Tapado de alberca pintado"
        />
        <ProductCard
          title="Tapado de Albercas - En charol"
          details={[
            { price: "desde $225/m²", text: "Costo variable según complejidad, área y profundidad" }
          ]}
          imagePath="images/tapado-de-albercas-charol.jpeg"
          imageAlt="Tapado de alberca en charol"
        />
      </CatalogSection>

      <div className="page-break-before"></div>

      <section className="py-8 md:py-12 print-bg">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-forest mb-6">Condiciones de Renta</h2>
        
        <div className="bg-cream p-8 rounded-lg shadow-md print-bg">
          <div className="max-w-3xl mx-auto">
            
            <ul className="space-y-3 list-disc pl-5">
              <li className="text-text">La reservación se confirma con un anticipo del 30%.</li>
              <li className="text-text">El saldo total debe cubrirse dos días antes del evento.</li>
              <li className="text-text">Se cobra flete adicional para instalaciones fuera de un radio de 25 km desde la ciudad de Querétaro.</li>
              <li className="text-text">En caso de cancelación, el anticipo del 30% no es reembolsable.</li>
              <li className="text-text">La instalación suele realizarse 1 o 2 días antes del evento.</li>
              <li className="text-text">La desinstalación normalmente ocurre el día siguiente. Si el evento es en sábado, se retira el lunes.</li>
            </ul>
            
            <p className="mt-6 text-forest font-medium">Para cualquier duda sobre nuestras condiciones de servicio, no dude en contactarnos.</p>
          </div>
        </div>
      </section>

      <div className="mt-12 mb-6 text-center print-bg p-6 rounded-lg bg-peach/20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">¿Necesitas más información?</h2>
        <p className="text-text leading-relaxed mx-auto max-w-xl">Contáctanos para un presupuesto personalizado.</p>
        <div className="mt-4 font-medium space-y-1">
          <p className="leading-relaxed">Email: hola@altivento.mx</p>
          <p className="leading-relaxed">Teléfono: +52 (442) 190-0928</p>
        </div>
      </div>

      <PrintButton />
      <PaletteView />
    </div>
  );
}