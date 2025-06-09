const preguntasBase = [
  {
    "pregunta": "Varón de 24 años que es traído al Servicio de Urgencias por un episodio de accidente cerebrovascular. En el TAC realizado de forma urgente se evidencian áreas hipodensas cortico-subcorticales a nivel temporal izquierdo y parietal derecho, así como calcificaciones en ganglios basales. En la analítica solo destaca la elevación del ácido láctico. Como antecedentes personales destacan tres ingresos previos por crisis convulsivas. Su madre y hermana fallecieron a los 35 y 30 años respectivamente; ambas habían presentado alteraciones motoras y mentales. Señale cuál es su sospecha diagnóstica y el tipo de herencia:",
    "opciones": {
      "A": "Síndrome MERRF. Herencia mitocondrial.",
      "B": "Enfermedad de Tay-Sachs. Herencia autosómica recesiva.",
      "C": "Síndrome MELAS. Herencia mitocondrial.",
      "D": "Síndrome DIDMOAD (o síndrome de Wolfram). Herencia autosómica recesiva."
    },
    "correcta": "C"
  },
  {
    "pregunta": "Las aneuploidías son las anomalías cromosómicas que se caracterizan por tener un número de cromosomas distinto del euploide, pero sin ser múltiplo de 23. Dentro de este tipo de alteraciones numéricas se encuentran las trisomías. ¿Cuál es la trisomía más frecuente en la especie humana?",
    "opciones": {
      "A": "Trisomía del par 21.",
      "B": "Trisomía del X.",
      "C": "Trisomía del par 18.",
      "D": "Trisomía del par 16."
    },
    "correcta": "D"
  },
  {
    "pregunta": "¿Qué estudio genético realizaría a un paciente de 31 años que presenta un adenoma paratiroideo, un cáncer de tiroides derivado de las células parafoliculares productor de calcitonina y un feocromocitoma?",
    "opciones": {
      "A": "Estudio de inestabilidad de microsatélites",
      "B": "Mutación del gen p53",
      "C": "Determinación de la mutación del gen RET",
      "D": "Mutación de gen MSH2"
    },
    "correcta": "C"
  },
  {
    "pregunta": "¿Cuál es la principal característica que define a una célula eucariota?",
    "opciones": {
      "A": "La existencia de un núcleo celular delimitado por la membrana nuclear.",
      "B": "La presencia de material genético en forma de cromosomas.",
      "C": "La existencia de una doble membrana lipídica celular.",
      "D": "Su capacidad de reproducirse por mitosis."
    },
    "correcta": "A"
  },
  {
    "pregunta": "Entre los siguientes marcadores tumorales, ¿cuál es el MÁS específico del cáncer de páncreas?",
    "opciones": {
      "A": "PSA.",
      "B": "Ca 125.",
      "C": "Ca 19.9.",
      "D": "CEA."
    },
    "correcta": "C"
  },
  {
    "pregunta": "¿En qué fase del ciclo celular se produce la duplicación de las moléculas de ADN nuclear?",
    "opciones": {
      "A": "Fase G0.",
      "B": "Fase G1.",
      "C": "Fase G2.",
      "D": "Fase S."
    },
    "correcta": "D"
  },
  {
    "pregunta": "Cuando nos encontramos en un individuo un rasgo fenotípico de causa no genética, pero que es similar a un rasgo fenotípico que puede tener causa genética, nos referimos a:",
    "opciones": {
      "A": "Expresividad variable.",
      "B": "Penetrancia incompleta.",
      "C": "Genocopia.",
      "D": "Fenocopia."
    },
    "correcta": "D"
  },
  {
    "pregunta": "Las enfermedades genéticas pueden tener distintos tipos de herencia entre generaciones familiares según su dominancia o recesividad y según si se afecta un autosoma o un cromosoma sexual. De los distintos enunciados propuestos sobre los distintos tipos de herencia, ¿cuál es la afirmación INCORRECTA?",
    "opciones": {
      "A": "Si dos portadores de la mutación CFTR para la fibrosis quística tienen un hijo en común, existirá un riesgo del 0.25 en cada embarazo de tener un hijo afecto al tratarse de una enfermedad con herencia autosómica recesiva.",
      "B": "Los hijos que hereden el alelo mutado de una enfermedad autosómica dominante presentarán invariablemente la enfermedad.",
      "C": "La expresividad de una enfermedad autosómica dominante se refiere al grado en que un fenotipo es expresado en un individuo.",
      "D": "Los hijos varones de padres con síndrome de X-frágil sólo podrían heredar la enfermedad de sus madres."
    },
    "correcta": "B"
  },
  {
    "pregunta": "La genética surge como ciencia que se encarga de estudiar la herencia y la expresión de los caracteres hereditarios. Con respecto a dicha ciencia, ¿cuál de las siguientes afirmaciones es FALSA?",
    "opciones": {
      "A": "Los glóbulos rojos no sirven para hacer un estudio genético.",
      "B": "Los cromosomas metacéntricos como el 14 dan lugar a las traslocaciones robertsonianas.",
      "C": "Las mitocondrias tienen su propio material genético.",
      "D": "El material genético (ADN) se duplica en fase S."
    },
    "correcta": "B"
  },
  {
    "pregunta": "¿Cuál de los siguiente tipos de ARN se encarga de transferir aminoácidos durante el proceso de la traducción?",
    "opciones": {
      "A": "ARNt.",
      "B": "ARNm.",
      "C": "ARNr.",
      "D": "ARN de interferencia."
    },
    "correcta": "A"
  },
{
    "pregunta": "En algunas enfermedades genéticas se produce el fenómeno de la anticipación, señale la correcta.",
    "opciones": {
      "A": "Se produce sólo en enfermedades de herencia AD.",
      "B": "Se produce sólo en enfermedades de herencia AR.",
      "C": "Se produce sólo en enfermedades de herencia ligada al X.",
      "D": "Se producen en enfermedades con mutaciones por expansión de tripletes."
    },
    "correcta": "D"
  },
  {
    "pregunta": "Cuando una enfermedad ambiental es fenotípicamente idéntica a otra de origen genético, estamos ante una:",
    "opciones": {
      "A": "Expresividad alélica.",
      "B": "Fenocopia.",
      "C": "Genocopia.",
      "D": "Variabilidad fenotípica."
    },
    "correcta": "B"
  },
  {
    "pregunta": "El concepto de expresividad genética hace referencia a:",
    "opciones": {
      "A": "El diferente grado de manifestación fenotípica de un mismo genotipo.",
      "B": "El grado de transmisión de un carácter genético entre las diferentes generaciones de individuos.",
      "C": "El grado de incapacidad que produce una enfermedad genética.",
      "D": "Las posibilidades genotípicas existentes para un mismo fenotipo."
    },
    "correcta": "A"
  },
  {
    "pregunta": "Varón de 40 años que presenta trastorno del comportamiento, demencia y serpenteo de extremidades, con antecedentes familiares similares. Al diagnóstico se observa expansión de tripletes. ¿De qué enfermedad se trata?",
    "opciones": {
      "A": "Enfermedad de Huntington",
      "B": "Distrofia miotónica de Steinert",
      "C": "Ataxia de Friedrich",
      "D": "Síndrome de X frágil"
    },
    "correcta": "A"
  },
  {
    "pregunta": "¿Cuál de los siguientes genes está implicado en la predisposición a desarrollar retinoblastoma?",
    "opciones": {
      "A": "RB1.",
      "B": "RB2.",
      "C": "RAS.",
      "D": "BRCA1"
    },
    "correcta": "A"
  },
  {
    "pregunta": "¿Cuál de los siguientes componentes no forma parte de una PCR?",
    "opciones": {
      "A": "Polietileno.",
      "B": "ADN molde.",
      "C": "Taq polimerasa.",
      "D": "MgCl2."
    },
    "correcta": "A"
  },
  {
    "pregunta": "La enfermedad de Duchenne es de herencia:",
    "opciones": {
      "A": "Ligada al X dominante.",
      "B": "Mitocondrial.",
      "C": "Autosómica dominante.",
      "D": "Ligada al X recesiva."
    },
    "correcta": "D"
  },
  {
    "pregunta": "La traducción de los genes consiste en el paso de:",
    "opciones": {
      "A": "ADN a proteína.",
      "B": "ADN a ARNm.",
      "C": "ARN a ADN.",
      "D": "ARNm a proteína."
    },
    "correcta": "D"
  },
  {
    "pregunta": "El síndrome de Prader-Willi es un trastorno genético poco común que provoca disminución de la fuerza muscular, bajos niveles de hormonas sexuales y una sensación constante de hambre. Es causado por cambios genéticos en la zona 'inestable' del cromosoma 15, la expresión de este gen es diferente si el gen se hereda del padre (Prader-Willi) o de la madre (Angelman). ¿Qué nombre recibe este fenómeno?",
    "opciones": {
      "A": "Mixing",
      "B": "Splicing",
      "C": "Imprinting",
      "D": "Pleiotropía"
    },
    "correcta": "C"
  },
  {
    "pregunta": "La hemocromatosis hereditaria es una enfermedad genética que produce un acúmulo excesivo de hierro en el organismo. A pesar de ser una enfermedad de herencia autosómica, las mujeres con genotipos compatibles con la enfermedad no presentan la misma afectación clínica que los hombres, hasta edades más tardías, fundamentalmente tras la menopausia. ¿A qué tipo de fenómeno correspondería este hecho?",
    "opciones": {
      "A": "Herencia autosómica influida por el sexo.",
      "B": "Fenocopia.",
      "C": "Herencia ligada al cromosoma X dominante.",
      "D": "Penetrancia incompleta."
    },
    "correcta": "A"
  },
  {
    "pregunta": "Un varón de 60 años, comienza a presentar pérdida de visión. Es diagnosticado de Neuropatía óptica hereditaria de Leber. El y su pareja, asustados al haber encontrado en internet que es una enfermedad genética hereditaria por herencia mitocondrial, deciden acudir a la consulta de consejo genético para saber si alguno de sus 3 hijos puede estar afecto. Por el momento los hijos, aunque jóvenes, no han presentado ninguna clínica y están sanos. ¿Es recomendable hacer alguna prueba de cribado a la descendencia?",
    "opciones": {
      "A": "No está indicado ya que los hijos con un 100% de probabilidad presentarán la enfermedad.",
      "B": "Solo realizaría la prueba si el padre fuera homocigoto.",
      "C": "No está indicada la prueba, debido a que el padre no puede transmitir la enfermedad.",
      "D": "Hay que hacer el cribado a todos los hijos, ya que la herencia es autosómica dominante y el 50% de ellos pueden estar afectos."
    },
    "correcta": "C"
  },
  {
    "pregunta": "Paciente de 25 años de edad se encuentra en consulta genética. Refiere que toda la familia de parte de madre ha tenido alguna forma de cáncer sobre todo de tejidos blandos, colon, mama y piel. Inclusive varios familiares han tenido varios tipos de tumor a lo largo de su vida. Inmediatamente se le viene un diagnostico a la cabeza ¿Cuál de las siguientes afirmaciones del Síndrome de Li Fraumeni es INCORRECTA?",
    "opciones": {
      "A": "Tiene una herencia autosomica dominante",
      "B": "El gen afectado es RB (gen supresor tumoral)",
      "C": "Estos pacientes deben tener un seguimiento estrecho a lo largo de su vida para poder detectar los posibles tumores, se podrían tomar medidas profilácticas como una mastectomica para aquellas que lo deseen.",
      "D": "El gen mutado es la diana mas frecuentemente afectado en las neoplasias humanas localizado en el brazo corto del cromosoma 17 (Cr17p)"
    },
    "correcta": "B"
  },
  {
    "pregunta": "Respecto al screening prenatal no invasivo, señale la FALSA:",
    "opciones": {
      "A": "Analiza células fetales en sangre materna",
      "B": "Se puede realizar a partir de la semana 9",
      "C": "Tiene una alta sensibilidad para el diagnostico del sd down, sin embargo la sensibilidad es mas baja para otras patologías",
      "D": "Actualmente se realiza cuando el cribado del 1º trimestre ha dado un riesgo intermedio. En caso de que salga positivo ya no estaría indicado realizar una prueba mas invasiva como una amniocentesis"
    },
    "correcta": "D"
  },
  {
    "pregunta": "La traslocación hace referencia al cambio de localización de un cromosoma de forma parcial o total. ¿Cuál es correcta sobre la traslocación robertsoniana?",
    "opciones": {
      "A": "Siempre induce enfermedad en quien la porta.",
      "B": "No conlleva peligro de enfermedad en la descendencia de un individuo que la porte.",
      "C": "Se produce entre cromosomas metacéntricos.",
      "D": "Se produce entre cromosomas acrocéntricos."
    },
    "correcta": "D"
  },
  {
    "pregunta": "¿Qué nombre reciben los cromosomas sexuales?",
    "opciones": {
      "A": "Autosomas.",
      "B": "Acrocéntricos.",
      "C": "Icompletos.",
      "D": "Gonosomas."
    },
    "correcta": "D"
  },
  {
    "pregunta": "¿Cuál de las siguientes enfermedades presenta imprinting materno?",
    "opciones": {
      "A": "Corea de Huntington",
      "B": "Neurofibromatosis tipo 1",
      "C": "Ataxia espinocerebelosa",
      "D": "Síndrome de Angelman"
    },
    "correcta": "D"
  },
  {
    "pregunta": "Una pareja con tres hijos (dos varones de 5 y 1 años y una niña de 4 años). El mayor de sus hijos varones presenta debilidad muscular y torpeza al correr y subir escaleras, tras la realización de las pruebas médicas pertinentes ha sido diagnosticado de distrofia muscular de Duchenne. En relación a la genética de esta enfermedad, señale la opción CORRECTA:",
    "opciones": {
      "A": "La madre es la que le ha transmitido la enfermedad.",
      "B": "El padre es el que le ha transmitido la enfermedad.",
      "C": "Ambos padres le han transmitido la enfermedad.",
      "D": "Si tienen un nuevo hijo, no podrá heredar la enfermedad."
    },
    "correcta": "A"
  },
  {
    "pregunta": "La expresión genética es un proceso influido por numerosos factores lo cual es de especial relevancia en algunas patologías ya que mutaciones en un mismo gen pueden originar cuadros clínicos diversos en función de distintos condicionantes, como por ejemplo, la herencia. Esto se debe a que los mecanismos de metilación difieren en ambos sexos durante la formación de los gametos. ¿Qué nombre recibe la situación en la que la expresión de un gen es distinta según si la herencia es paterna o materna?",
    "opciones": {
      "A": "Penetrancia",
      "B": "Imprinting",
      "C": "Mosaicismo",
      "D": "Expresividad"
    },
    "correcta": "B"
  },
  {
    "pregunta": "Una joven de 16 años acude a consulta con amenorrea primaria. Al hacerle una exploración más detallada encontramos que tiene unas espaldas más anchas de lo normal, con las areolas mamarias muy separadas, y una estatura baja. Se le solicita un análisis genético para ver si presenta el síndrome cromosómico en el cual estás pensando. De ser así, ¿cuál de los siguientes defectos cardiovasculares estaría asociado con dicho síndrome de sospecha?",
    "opciones": {
      "A": "Coartación de aorta.",
      "B": "Ductus arterioso persistente.",
      "C": "Transposición de grandes vasos.",
      "D": "Tetralogía de Fallot."
    },
    "correcta": "A"
  },
  {
    "pregunta": "Mutaciones en el gen CFTR se relacionan con:",
    "opciones": {
      "A": "Fibrosis quística.",
      "B": "Retinosis pigmentaria.",
      "C": "Ataxia de Friedreich.",
      "D": "Síndrome de Leriche."
    },
    "correcta": "A"
  },
 {
    "pregunta": "La secuencia de tres nucleótidos que contiene la información necesaria para codificar un aminoácido, recibe el nombre de:",
    "opciones": {
      "A": "Anticodón.",
      "B": "Trasposón.",
      "C": "Codón.",
      "D": "Exón."
    },
    "correcta": "C"
  },
  {
    "pregunta": "¿Qué tejidos se ven especialmente afectados por las enfermedades de herencia mitocondrial?",
    "opciones": {
      "A": "No presentan tropismo por ningún tejido.",
      "B": "Tejido muscular y nervioso.",
      "C": "Gónadas.",
      "D": "Pulmones"
    },
    "correcta": "B"
  },
  {
    "pregunta": "Una pareja sana ha tenido un primer hijo sano mientras que su segundo hijo se encuentra afecto de fenilcetonuria. ¿Cuál será la probabilidad de que su primer hijo sea portador?",
    "opciones": {
      "A": "0%.",
      "B": "25%.",
      "C": "50%.",
      "D": "67%."
    },
    "correcta": "D"
  },
  {
    "pregunta": "¿Cuando se completa la segunda división meiótica del ovocito?",
    "opciones": {
      "A": "Durante el desarrollo fetal",
      "B": "Al momento del nacimiento",
      "C": "Tras la fecundación",
      "D": "En la primera menstruacion"
    },
    "correcta": "C"
  },
  {
    "pregunta": "La acondroplasia es un trastorno genético que afecta al crecimiento óseo y causa el tipo más común de enanismo. Tiene un patrón de herencia autosómica dominante. Si dos progenitores heterocigotos tuvieran 4 hijos, ¿cuál sería la probabilidad de que todos sus hijos estuvieran sanos (fenotipo recesivo)?",
    "opciones": {
      "A": "1/4.",
      "B": "3/4.",
      "C": "1/ 64.",
      "D": "1/256."
    },
    "correcta": "D"
  },
  {
    "pregunta": "¿Cuál de las siguientes enfermedades no tiene una herencia autosómica dominante?",
    "opciones": {
      "A": "Esclerosis tuberosa",
      "B": "Enfermedad de Wilson",
      "C": "Otosclerosis",
      "D": "Poliquistosis renal del adulto"
    },
    "correcta": "B"
  },
  {
    "pregunta": "Acude a nuestra consulta una paciente de 38 años que desde la adolescencia ha padecido múltiples tumores malignos en diversos órganos: colon, mama, sarcoma y actualmente, presenta cinco tumores cutáneos también malignos en diferentes localizaciones. Otros familiares también han presentado diversos tumores malignos. Nos planteamos que presente algún tipo de síndrome de base genética.. ¿Qué gen tendría más interés para nosotros?",
    "opciones": {
      "A": "MSH2",
      "B": "p53",
      "C": "APC",
      "D": "BRCA1"
    },
    "correcta": "B"
  },
  {
    "pregunta": "Respecto a los siguientes conceptos de genética, ¿cuál es FALSO?",
    "opciones": {
      "A": "un polimorfismo de un solo nucleótido (SNP) es una variación en la secuencia del ADN que afecta a una sola base nitrogenada. Esta variación debe darse al menos en un 1% de la población para ser considerada como un SNP",
      "B": "Cada 3 nucleotidos de RNAm da lugar a un aminoacido (codón)",
      "C": "Un aminoácido puede ser traducido a partir de diferentes tripletes pero un triplete solo da lugar a un aminoácido concreto",
      "D": "El RNAm solo contiene intrones, no exones"
    },
    "correcta": "D"
  },
  {
    "pregunta": "¿Cuándo se considera que finaliza la meiosis de los gametos femeninos en la especie humana?",
    "opciones": {
      "A": "Tras la ovulación.",
      "B": "Inmediatamente antes de que se produzca la ovulación.",
      "C": "En el transcurso de un ciclo ovárico completo.",
      "D": "Inmediatamente tras la fecundación."
    },
    "correcta": "D"
  },
  {
    "pregunta": "Acude a su consulta un niño de 8 años, acompañado por sus padres, derivado desde su pediatra de área por obesidad. A la exploración encontramos a un niño de baja estatura, con manos y pies pequeños, con hipotonía muscular e hipogonadismo. Entre sus antecedentes obstétricos cabe mencionar una disminución de la actividad fetal. Respecto a la enfermedad que Vd sospecha, ¿Qué enunciado considera incorrecto?",
    "opciones": {
      "A": "Se trata de una enfermedad por impronta genómica del 15q11-q13.",
      "B": "Están implicados procesos de metilación que difieren entre sexos durante la gametogénesis.",
      "C": "La expresión del gen es indiferente si el gen se hereda del padre o de la madre.",
      "D": "Se debe a la falta de expresión de los genes específicos del cromosoma paterno en 15q11-q13."
    },
    "correcta": "C"
  },
{
  "pregunta": "Cuál de las siguientes NO es una enfermedad con imprinting:",
  "opciones": [
    "Corea de Huntington",
    "Neurofibromatosis",
    "Distrofia miotónica",
    "Síndrome de Ehlers-Danlos"
  ],
  "respuesta_correcta": 4
},
{
  "pregunta": "¿En qué fase de la meiosis se originan las aneuploidías?",
  "opciones": [
    "En la primera anafase",
    "En la segunda anafase",
    "En la primera metafase",
    "En la segunda metafase"
  ],
  "respuesta_correcta": 1
},
{
  "pregunta": "¿Cuál de los siguientes componentes forma parte de una PCR?",
  "opciones": [
    "NaCl2",
    "Nitrocelulosa",
    "Extracto proteico del plasma",
    "Taq polimerasa"
  ],
  "respuesta_correcta": 4
},
{
  "pregunta": "¿En qué gen están presentes las alteraciones en el síndrome de Li-Fraumeni?",
  "opciones": [
    "P53",
    "RAS",
    "BCL2",
    "BRCA1"
  ],
  "respuesta_correcta": 1
},
{
  "pregunta": "La acondroplasia es la causa más frecuente de enanismo. Dos pacientes acondroplásicos tienen dos hijos: uno de ellos también tiene acondroplasia, pero el otro no. Con estos datos se puede afirmar que:",
  "opciones": [
    "Ambos progenitores son heterocigotos para el gen FGFR3",
    "El hijo que no padece acondroplasia es heterocigoto para el gen FGFR3",
    "La probabilidad de que el siguiente hijo de la pareja tenga también acondroplasia es del 50%",
    "La acondroplasia se hereda con carácter autosómico recesivo"
  ],
  "respuesta_correcta": 1
},
{
  "pregunta": "La variabilidad genética es una realidad que está siendo demostrada por los estudios del genoma humano. Con respecto a la misma, señale la afirmación CORRECTA:",
  "opciones": [
    "La variabilidad genética es superior en la raza humana que en los gorilas",
    "La principal causa de variabilidad genética está en el aumento de variantes en cadenas largas de DNA",
    "Las variaciones genéticas debidas a la modificación de un solo nucleótido (SNP) son exclusivas de zonas geográficas específicas",
    "Los estudios del genoma humano utilizan frecuentemente el análisis de SNP"
  ],
  "respuesta_correcta": 4
},
{
  "pregunta": "La mutación en el gen FBN1 ocasiona alteraciones del tejido conectivo. ¿Cómo se llama el fenómeno que relaciona la mutación con múltiples síntomas clínicos como aneurismas, coloboma iridiano, y subluxación del cristalino?",
  "opciones": [
    "Expresividad",
    "Penetrancia",
    "Pleiotropía",
    "Imprinting"
  ],
  "respuesta_correcta": 3
},
{
  "pregunta": "Respecto a la herencia ligada al cromosoma X dominante, ¿cuál de las siguientes enfermedades presenta este tipo de herencia?",
  "opciones": [
    "Síndrome de X frágil",
    "Distrofia de Duchenne",
    "Agammaglobulinemia de Bruton",
    "Inmunodeficiencia combinada severa ligada al X"
  ],
  "respuesta_correcta": 1
},
{
  "pregunta": "Señale la correcta respecto a la tecnología FISH:",
  "opciones": [
    "Es una técnica para el estudio de las proteínas, que se encuadra en el ámbito de la proteómica",
    "Es una técnica que permite el estudio a nivel de nucleótido de la secuencia de un gen",
    "Es una técnica análoga a la reacción en cadena de la polimerasa, pero para el estudio de los cromosomas",
    "Es una técnica de citogenética que utiliza la hibridación de sondas marcadas con fluorescencia"
  ],
  "respuesta_correcta": 4
},
{
  "pregunta": "Existen diferentes mecanismos de mutaciones causantes de enfermedades; uno de ellos es la mutación por expansión de tripletes en la que algunos genes contienen una zona de repetición de un triplete de nucleótidos. Asociado a esta mutación, suele existir el fenómeno llamado de anticipación; según dicho fenómeno en generaciones sucesivas la enfermedad aparece a edades cada vez más tempranas. ¿Cuál de las siguientes enfermedades NO relacionaría con una mutación por expansión de tripletes?",
  "opciones": [
    "Corea de Huntington",
    "Ataxia de Friedrich",
    "Anemia drepanocítica",
    "Distrofia miotónica de Steinert"
  ],
  "respuesta_correcta": 3
},
  {
    "pregunta": "¿Cuál es la parte de la genética que se encarga del estudio de la expresión de los genes?",
    "opciones": [
      "Citogenética.",
      "Genética molecular.",
      "Epigenética.",
      "Metagenómica."
    ],
    "respuesta_correcta": 2
  },
  {
    "pregunta": "ARNt interviene de forma fundamental en el proceso de:",
    "opciones": [
      "Transcripción.",
      "Traducción.",
      "Duplicación del ADN en la mitosis.",
      "Duplicación del ADN en la meiosis."
    ],
    "respuesta_correcta": 1
  },
  {
    "pregunta": "Todas las afirmaciones siguientes sobre el síndrome de Turner son ciertas, EXCEPTO:",
    "opciones": [
      "Se debe más frecuentemente a monosomía del cromosoma X (o sea, el cariotipo 45,X).",
      "Se asocia a edad avanzada de la madre.",
      "Su riesgo de aparición NO aumenta en el segundo hijo, ni siquiera si el primero está afectado.",
      "El mosaicismo es un hallazgo frecuente."
    ],
    "respuesta_correcta": 1
  },
  {
    "pregunta": "El ADN mitocondrial experimenta una alta tasa de mutaciones, motivo por el cual es posible que en un mismo individuo y célula coexistan diferentes ADN mitocondriales. ¿Este curioso fenómeno se conoce como?",
    "opciones": [
      "Homoplasmia",
      "Poliploidía",
      "Isocromosomas",
      "Heteroplasmia"
    ],
    "respuesta_correcta": 3
  },
  {
    "pregunta": "La madre de Juan, niño de 3 años, es portadora de una patología con herencia mitocondrial. Con respecto a este grupo de patologías, es INCORRECTO que:",
    "opciones": [
      "Juan tiene la posibilidad de padecer la enfermedad.",
      "Este tipo de patrón de herencia se asocia a miopatías y neuropatías.",
      "Las mitocondrias de una persona se heredan de su progenitora en su totalidad.",
      "El estudio metabólico inicial se orientará a la demostración de alteraciones en el estado de oxidorreducción plasmática."
    ],
    "respuesta_correcta": 2
  },
  {
    "pregunta": "Un examen rutinario en un neonato revela aniridia y malformaciones genitales. ¿Cuál de las siguientes opciones debería sospecharse en PRIMER lugar?",
    "opciones": [
      "Hipercalcemia.",
      "Hipocalcemia.",
      "Enfermedad de Tay-Sachs.",
      "Tumor de Wilms."
    ],
    "respuesta_correcta": 3
  },
  {
    "pregunta": "La fibrosis quística (FQ) es una enfermedad de herencia autosómica recesiva causada por mutaciones en el gen CFTR. Se han descrito más de 1.500 mutaciones en dicho gen causantes de la enfermedad. Este es un claro ejemplo de:",
    "opciones": [
      "Genocopia.",
      "Heterogeneidad genética de alelo.",
      "Heterogeneidad genética de locus.",
      "Heterogeneidad clínica."
    ],
    "respuesta_correcta": 1
  },
  {
    "pregunta": "¿Cuál es el diagnóstico MÁS probable de un recién nacido con microcefalia, retraso del crecimiento intrauterino, cardiopatía congénita, pie astrágalo vertical y una facies peculiar (microftalmia, hendiduras palpebrales pequeñas, micrognatia y orejas displásicas), las manos con el dedo índice y meñique sobre el medio y anular?",
    "opciones": [
      "Trisomía 18 (Síndrome de Edwards).",
      "Trisomía 13 (Síndrome de Patau).",
      "Trisomía 21 (Síndrome de Down).",
      "Trisomía 9."
    ],
    "respuesta_correcta": 0
  },
  {
    "pregunta": "¿Qué nombre recibe la ciencia que se encarga del estudio de la metilación y expresión de los genes?",
    "opciones": [
      "Epigenética.",
      "Pirogenética.",
      "Metagenómica.",
      "Citogenética."
    ],
    "respuesta_correcta": 0
  },
  {
    "pregunta": "¿Cuál de las siguientes enfermedades presenta heterogeneidad genética (de locus) y puede deberse a afectación de varios loci en distintos cromosomas, tanto autosómicos como sexuales?",
    "opciones": [
      "Síndrome de Down.",
      "Enfermedad granulomatosa crónica.",
      "Fibrosis quística.",
      "Corea de Huntington."
    ],
    "respuesta_correcta": 1
  },
  {
    "pregunta": "Un tipo de mutaciones causantes de enfermedades genéticas en humanos, son las denominadas mutaciones de splicing. Señale la verdadera sobre este tipo de mutaciones.",
    "opciones": [
      "Son mutaciones que afectan a las regiones flanqueantes entre los exones e intrones.",
      "Son mutaciones que afectan a la región promotora de los genes.",
      "Son mutaciones que se transmiten en el ADN mitocondrial.",
      "Son alteraciones en el número par de una pareja de cromosomas."
    ],
    "respuesta_correcta": 1
  },
  {
    "pregunta": "El fenómeno de expansión de secuencias consiste en que se repiten, en número excesivo, ciertas secuencias de DNA, denominadas tripletes expansivos. De las siguientes enfermedades, en una de ellas NO se produce este fenómeno. Señálela:",
    "opciones": [
      "Corea de Huntington.",
      "Enfermedad de Alzheimer.",
      "Distrofia miotónica de Steinert.",
      "Síndrome del cromosoma X frágil."
    ],
    "respuesta_correcta": 2
  },
  {
    "pregunta": "Pareja que se presenta en la consulta de Genética preocupada por la fibrosis quística. Él (judío) 1/30, ella (asiática) 1/80. ¿Cuál sería el riesgo de tener un hijo con fibrosis quística?",
    "opciones": [
      "1/1.200.",
      "1/2.400.",
      "1/4.800.",
      "1/9.600."
    ],
    "respuesta_correcta": 4
  },
  {
    "pregunta": "En el óvulo humano, la anafase de la segunda división meiótica tiene lugar INMEDIATAMENTE después de la:",
    "opciones": [
      "Fecundación.",
      "Recombinación genética.",
      "Diacinesis de la segunda división meiótica.",
      "Ovulación."
    ],
    "respuesta_correcta": 1
  },
  {
    "pregunta": "Con respecto a las secuencias de tripletes, señale la asociación INCORRECTA:",
    "opciones": [
      "Síndrome de X frágil - Triplete CGG.",
      "Corea de Huntington - Triplete CAG.",
      "Ataxia de Friedrich - Triplete GAA.",
      "Distrofia miotónica de Steinert - Triplete GTC."
    ],
    "respuesta_correcta": 4
  },
  {
    "pregunta": "Varón de 13 años con características típicas del síndrome X frágil. ¿Cuál afirmación es FALSA?",
    "opciones": [
      "Es la causa más frecuente de retraso mental familiar.",
      "Es frecuente el prolapso de la válvula mitral.",
      "Es una enfermedad por expansión de un trinucleótido.",
      "El macroorquidismo es un signo constante, aunque puede no aparecer hasta la pubertad."
    ],
    "respuesta_correcta": 4
  },
  {
    "pregunta": "¿Cuál de las siguientes opciones es un claro ejemplo de imprinting genético?",
    "opciones": [
      "Hemocromatosis hereditaria.",
      "Síndrome de Down.",
      "Síndrome de Prader-Willi/Síndrome de Angelman.",
      "Fibrosis quística."
    ],
    "respuesta_correcta": 3
  },
  {
    "pregunta": "La terapia génica es un campo creciente de estudio. Señale la afirmación correcta:",
    "opciones": [
      "Actualmente es una terapia de uso restringido a ensayos clínicos.",
      "Se ha aprobado su uso en ficha técnica en la Inmunodeficiencia Combinada Grave por déficit de ADA.",
      "Su utilización se asocia siempre al desarrollo de oncogenicidad.",
      "Consiste en la administración vía intramuscular de factores de transcripción genéticos, asociados a enzimas de integración."
    ],
    "respuesta_correcta": 2
  },
  {
    "pregunta": "En un paciente VIH(+) tuberculín(-) con derrame pleural, la PCR positiva para tuberculosis en el exudado pleural indica que:",
    "opciones": [
      "Existe inflamación inespecífica.",
      "Está infectado por el Mycobacterium tuberculosis.",
      "Existe afectación articular (TBC articular).",
      "Es patognomónico de Mal de Pott."
    ],
    "respuesta_correcta": 2
  },
  {
    "pregunta": "La duplicación del DNA tiene lugar:",
    "opciones": [
      "En la fase S del ciclo celular.",
      "En la fase G2 del ciclo celular.",
      "En la fase M del ciclo celular.",
      "En la fase G1 del ciclo celular."
    ],
    "respuesta_correcta": 1
  },
  {
    "pregunta": "El síndrome de ataxia-telangiectasia cursa con unas características clínicas muy variadas: degeneración cerebelosa, telangiectasias, inmunodeficiencia, etc. ¿Cómo definiríamos este fenómeno?",
    "opciones": [
      "Penetrancia incompleta.",
      "Expresividad variable.",
      "Heterogeneidad genética.",
      "Pleiotropía."
    ],
    "respuesta_correcta": 4
  },
  {
    "pregunta": "Señale la opción MÁS correcta para definir el concepto de desequilibrio de ligamiento:",
    "opciones": [
      "Tendencia existente entre dos genes a heredarse juntos. Es mayor a menor distancia entre ellos.",
      "Tendencia existente entre dos genes a heredarse juntos. Es mayor a mayor distancia entre ellos.",
      "Tendencia de una población a tener más individuos portadores de una enfermedad cuanto mayor sea la prevalencia de dicha enfermedad.",
      "Tendencia de una población a tener más individuos portadores de una enfermedad cuanto menor sea la prevalencia de dicha enfermedad."
    ],
    "respuesta_correcta": 1
  },
  {
    "pregunta": "Niño de 4 años con retraso motor, coreoatetosis, autolesiones y artritis; ácido úrico elevado. ¿Cuál es el posible defecto enzimático?",
    "opciones": [
      "Deficiencia de la adenina fosforribosiltransferasa.",
      "Deficiencia de la hipoxantina‑guanina fosforribosiltransferasa.",
      "Aumento del recambio celular de los aminoácidos.",
      "Deficiencia de la fosforribosilpirofosfato sintetasa."
    ],
    "respuesta_correcta": 2
  },
  {
    "pregunta": "Una de las siguientes afirmaciones sobre genética es FALSA. Señálela:",
    "opciones": [
      "La eucromatina es la cromatina activa transcripcionalmente.",
      "Los cromosomas típicos en los que se produce la traslocación robertsoniana son el 21 y el 14.",
      "Los cromocentros se forman al condensarse la heterocromatina facultativa.",
      "El cromosoma X inactivo en las mujeres se debe al efecto Lyon."
    ],
    "respuesta_correcta": 3
  },
  {
    "pregunta": "Se dice que existe heterogeneidad alélica cuando mutaciones distintas en un mismo gen originan el mismo cuadro clínico. ¿Cuál de las siguientes enfermedades es un ejemplo clásico?",
    "opciones": [
      "Betatalasemia.",
      "Neurofibromatosis.",
      "Enanismo congénito.",
      "Ataxia‑telangiectasia."
    ],
    "respuesta_correcta": 1
  },
  {
    "pregunta": "Sobre la Neurofibromatosis tipo 1, indique la característica que NO corresponde:",
    "opciones": [
      "El gen afectado es el NF1 que codifica la neurofibromina.",
      "Aparecen manchas café con leche, efélides axilares/inguinales y neurofibromas.",
      "Tiene un patrón de herencia autosómico recesivo.",
      "El gen se localiza en el cromosoma 17."
    ],
    "respuesta_correcta": 3
  },
  {
    "pregunta": "Durante la primera división meiótica, ¿en qué fase tiene lugar la condensación de la cromatina?",
    "opciones": [
      "Leptoteno.",
      "Cigoteno.",
      "Paquiteno.",
      "Diacinesis."
    ],
    "respuesta_correcta": 1
  },
  {
    "pregunta": "La heteroplasmia es:",
    "opciones": [
      "La distinta carga genética de los gametos de un individuo.",
      "La distinta carga genética de las mitocondrias de un individuo.",
      "La distinta carga genética de los HLA de dos individuos emparentados.",
      "La distinta carga genética de las células de un individuo quimérico."
    ],
    "respuesta_correcta": 2
  },
  {
    "pregunta": "¿En qué fase de la primera división meiótica se pueden producir las aneuploidías?",
    "opciones": [
      "Paquiteno de profase I.",
      "Anafase I.",
      "Zigoteno de profase I.",
      "Metafase I."
    ],
    "respuesta_correcta": 2
  },
  {
    "pregunta": "En la meiosis se produce el fenómeno de recombinación genética, ¿en qué consiste?",
    "opciones": [
      "Inserción de secuencias nuevas en cromosomas no homólogos.",
      "Intercambio de material genético entre cromátidas hermanas.",
      "Intercambio de material genético entre cromátidas homólogas.",
      "Intercambio de material genético entre cromátidas de cromosomas no homólogos."
    ],
    "respuesta_correcta": 3
  },
{
    "pregunta": "¿Cuál de las siguientes enfermedades se produce por expansión anormal de tripletes?",
    "opciones": [
      "Corea de Huntington.",
      "Hemocromatosis hereditaria.",
      "Poliquistosis renal infantil.",
      "Fiebre Mediterránea familiar."
    ],
    "respuesta_correcta": 1
  },
  {
    "pregunta": "Los individuos de sexo femenino contienen 2 cromosomas X. Respecto al fenómeno de Lyon, señale la afirmación verdadera:",
    "opciones": [
      "Inactivación de un X sólo si existe algún gen alterado potencialmente patogénico.",
      "Inactivación de un X al azar en fases tempranas, existiendo una única población celular con el mismo X inactivado.",
      "Inactivación de un X al azar en fases tempranas, existiendo dos poblaciones celulares con distinto X inactivado.",
      "Inactivación de un X que también puede ocurrir en varones XY con genes alterados."
    ],
    "respuesta_correcta": 3
  },
  {
    "pregunta": "Niño de 3 años con autolesiones, artritis y ácido úrico elevado. ¿Cuál es la enzima ausente más probable?",
    "opciones": [
      "Deficiencia de adenina fosforribosiltransferasa.",
      "Deficiencia de hipoxantina‑guanina fosforribosiltransferasa.",
      "Hidrolasa lisosomal.",
      "Ceramida‑sintasa."
    ],
    "respuesta_correcta": 2
  },
  {
    "pregunta": "¿Cuál afirmación sobre la meiosis es FALSA?",
    "opciones": [
      "La recombinación genética sucede en el paquiteno de profase I.",
      "En metafase I se obtiene la foto del cariotipo por máxima condensación.",
      "Los errores en la anafase I dan lugar a aneuploidías.",
      "Los quiasmas se visualizan en diploteno."
    ],
    "respuesta_correcta": 2
  },
  {
    "pregunta": "De las siguientes enfermedades, ¿cuál NO está causada por expansión de tripletes?",
    "opciones": [
      "Síndrome del X‑frágil.",
      "Hemocromatosis.",
      "Ataxia de Friedrich.",
      "Distrofia miotónica de Steinert."
    ],
    "respuesta_correcta": 2
  },
  {
    "pregunta": "Señale la afirmación CORRECTA:",
    "opciones": [
      "En el varón, la inactivación del X forma el corpúsculo de Barr.",
      "Herencia holándrica afecta a varones por mutación en un X.",
      "La penetrancia es el % de portadores que expresan el fenotipo.",
      "La hemocromatosis es ligada al sexo, por eso más frecuente en varones."
    ],
    "respuesta_correcta": 3
  },
  {
    "pregunta": "¿Qué zona cromosómica permite clasificar la morfología de los cromosomas?",
    "opciones": [
      "Centrómero.",
      "Telómeros.",
      "Nucleosomas.",
      "Regiones satélite."
    ],
    "respuesta_correcta": 1
  },
  {
    "pregunta": "La función de una enzima de restricción es:",
    "opciones": [
      "Reconocer secuencias de ADN y cortar cerca de ellas.",
      "Reconocer secuencias de ADN y separar las hebras.",
      "Reconocer ARN y protegerlo de degradación.",
      "Activar o desactivar la ADN‑polimerasa."
    ],
    "respuesta_correcta": 1
  },
  {
    "pregunta": "En genética y cáncer, señale la combinación FALSA:",
    "opciones": [
      "Inestabilidad genética: síndrome de Lynch (MSH2).",
      "Inactivación de oncosupresores: p53.",
      "Alteración de genes de apoptosis: FAS.",
      "Actividad de telomerasas: disminución de E‑cadherina."
    ],
    "respuesta_correcta": 4
  },
  {
    "pregunta": "Adolescente con angioqueratomas, dolor urente en manos/pies y enfermedad renal incipiente. Sospecha clínica:",
    "opciones": [
      "Enfermedad de Gaucher.",
      "Enfermedad de Niemann‑Pick.",
      "Enfermedad de Krabbe.",
      "Enfermedad de Fabry."
    ],
    "respuesta_correcta": 4
  },
  {
    "pregunta": "¿Cuál corresponde a una mutación de frameshift?",
    "opciones": [
      "Mutación puntual con cambio de aminoácido.",
      "Mutación silenciosa.",
      "Mutación con codón STOP prematuro.",
      "Mutación que altera el marco de lectura."
    ],
    "respuesta_correcta": 4
  },
  {
    "pregunta": "En una población de 100 individuos, 50 poseen un gen y sólo 25 lo expresan. Esto ejemplifica:",
    "opciones": [
      "Penetrancia del 50 %.",
      "Penetrancia del 25 %.",
      "Expresividad del 50 %.",
      "Expresividad del 25 %."
    ],
    "respuesta_correcta": 1
  },
  {
    "pregunta": "El genotipo de una célula es el conjunto de:",
    "opciones": [
      "Genes de esa célula, estén activos o no.",
      "Genes activos solamente.",
      "Características fenotípicas de la célula madura.",
      "Genes excluyendo intrones."
    ],
    "respuesta_correcta": 1
  },
  {
    "pregunta": "En relación a la meiosis señale la FALSA:",
    "opciones": [
      "Es un proceso de división celular para células somáticas.",
      "Es un proceso de división celular para gametos.",
      "Requiere duplicación del ADN.",
      "Hay diferencias entre la meiosis masculina y femenina."
    ],
    "respuesta_correcta": 1
  },
  {
    "pregunta": "¿Cuál NO se corresponde con herencia autosómica dominante?",
    "opciones": [
      "Existencia de portadores sanos.",
      "Un enfermo tiene 50 % de hijos afectados.",
      "Afecta a ambos sexos por igual.",
      "La mayoría de afectados tiene un progenitor afectado."
    ],
    "respuesta_correcta": 1
  },
  {
    "pregunta": "Una célula madre multipotente puede generar:",
    "opciones": [
      "Un organismo completo.",
      "Cualquier hoja embrionaria.",
      "Una sola hoja embrionaria.",
      "Un solo tejido."
    ],
    "respuesta_correcta": 3
  },
  {
    "pregunta": "¿En qué orgánulo celular se lleva a cabo la traducción genética?",
    "opciones": [
      "Retículo endoplásmico rugoso.",
      "Aparato de Golgi.",
      "Mitocondria.",
      "Núcleo."
    ],
    "respuesta_correcta": 1
  },
  {
    "pregunta": "El test de mayor sensibilidad para el diagnóstico de fibrosis quística es:",
    "opciones": [
      "Análisis de linkage.",
      "Polimorfismo de fragmentos de restricción.",
      "Hibridación con sondas para alelos mutados.",
      "Excreción de cloro en fibroblastos."
    ],
    "respuesta_correcta": 3
  },
  {
    "pregunta": "¿Cuál de las siguientes enfermedades NO se produce por expansión anormal de tripletes?",
    "opciones": [
      "Corea de Huntington.",
      "Miotonía de Steinert.",
      "Síndrome de Martin‑Bell.",
      "Fibrosis quística."
    ],
    "respuesta_correcta": 4
  },
  {
    "pregunta": "Con respecto al código genético, señale la FALSA:",
    "opciones": [
      "Se organiza en codones o tripletes.",
      "Es degenerado: un aminoácido puede tener varios codones.",
      "Algunos codones pueden codificar más de un aminoácido según el ribosoma.",
      "Se denomina código genético a la lectura de la secuencia del ARNm."
    ],
    "respuesta_correcta": 3
  },
  {
    "pregunta": "¿Cuál de las siguientes patologías de acúmulo lisosómico de lípidos es un trastorno ligado al cromosoma X?",
    "opciones": [
      "Enfermedad de Tay‑Sachs.",
      "Enfermedad de Niemann‑Pick.",
      "Enfermedad de Gaucher.",
      "Enfermedad de Fabry."
    ],
    "respuesta_correcta": 4
  },
  {
    "pregunta": "¿En qué estructura de los cromosomas se anclan los microtúbulos para desplazarlos durante la división celular?",
    "opciones": [
      "Telómero.",
      "Centrómero.",
      "Cromátide.",
      "Cinetocoro."
    ],
    "respuesta_correcta": 4
  },
  {
    "pregunta": "Indique la opción FALSA respecto a la dotación diploide en la especie humana:",
    "opciones": [
      "Es constante para todas las células somáticas.",
      "En la especie humana consiste en 46 cromosomas.",
      "Es característica de las células germinales.",
      "Hay 22 pares de autosomas y dos cromosomas sexuales."
    ],
    "respuesta_correcta": 3
  },
  {
    "pregunta": "En cuanto a la regulación postranscripcional del ARNm, el splicing alternativo explica que:",
    "opciones": [
      "Omitiendo la transcripción de unos u otros exones dentro de un mismo gen de ADN, este gen puede dar lugar a diversos ARNt y, por lo tanto, a diversas proteínas.",
      "Omitiendo la transcripción de unos u otros exones dentro de un mismo gen de ADN, este gen puede dar lugar a diversos ARNm y, por lo tanto, a diversas proteínas cuando sea traducido.",
      "Dependiendo del peso molecular del ARNt transcrito, este podrá dar lugar con un mismo codón a diferentes aminoácidos.",
      "Dependiendo del peso molecular del ARNm transcrito, este podrá dar lugar con un mismo codón a diferentes ARNr."
    ],
    "respuesta_correcta": 2
  },
  {
    "pregunta": "¿Cuál de las siguientes NO corresponde con una enfermedad de origen cromosómico?",
    "opciones": [
      "Síndrome de Down.",
      "Síndrome de Klinefelter.",
      "Síndrome de Turner.",
      "Síndrome del cromosoma X frágil."
    ],
    "respuesta_correcta": 4
  },
  {
    "pregunta": "Respecto a la ganancia o pérdida de cromosomas durante el desarrollo, señale la opción INCORRECTA:",
    "opciones": [
      "Una monosomía somática suele causar aborto gestacional.",
      "La trisomía 16 es la aneuploidía más frecuente en embriones humanos.",
      "A menor tamaño del cromosoma, mayor tolerancia a sus anomalías.",
      "Un 50 % de las células del cuerpo humano presentan diploidía como característica."
    ],
    "respuesta_correcta": 4
  },
  {
    "pregunta": "Sobre la variabilidad del genoma humano, ¿cuál afirmación es CORRECTA?",
    "opciones": [
      "Los SNP son muy poco frecuentes; por eso se usan como marcadores de ligamiento.",
      "Los SNP presentan una distribución homogénea dentro del genoma humano.",
      "Los SNP aparecen en sólo un 0,5 % de la población.",
      "La variabilidad entre dos genomas humanos se debe sobre todo a mutaciones únicas."
    ],
    "respuesta_correcta": 2
  },
  {
    "pregunta": "¿En qué parte de la célula se lleva a cabo el proceso de transcripción genética?",
    "opciones": [
      "Retículo endoplásmico rugoso.",
      "Núcleo.",
      "Ribosomas.",
      "Mitocondrias."
    ],
    "respuesta_correcta": 2
  },
  {
    "pregunta": "Una deleción de 4 Mb en el cromosoma 15 puede producir Síndrome de Angelman o Prader‑Willi según el progenitor de origen. Este fenómeno se denomina:",
    "opciones": [
      "Sexualidad genómica.",
      "Heredabilidad.",
      "Imprinting.",
      "Herencia ligada al sexo."
    ],
    "respuesta_correcta": 3
  },
  {
    "pregunta": "En el sistema HLA los grupos sanguíneos muestran un patrón de herencia:",
    "opciones": [
      "Dominante.",
      "Codominante.",
      "Poligénica.",
      "Ligada al X."
    ],
    "respuesta_correcta": 2
  }
]

/* ───────── NORMALIZADOR ───────── */
function normalizarPreguntas(lista) {
  const letras = ['A','B','C','D'];

  return lista.map(p => {
    /* 1. Si las opciones vienen como array, pásalas a objeto {A:…,B:…} */
    if (Array.isArray(p.opciones)) {
      const obj = {};
      p.opciones.forEach((txt,i) => obj[letras[i]] = txt);
      p.opciones = obj;
    }

    /* 2. Si la respuesta es numérica (respuesta_correcta), conviértela a letra */
    if ('respuesta_correcta' in p) {
      let idx = Number(p.respuesta_correcta);   // puede venir como 1-4 u 0-3
      if (idx >= 1) idx -= 1;                   // 1→0, 2→1, 3→2, 4→3
      p.correcta = letras[idx];
      delete p.respuesta_correcta;              // ya no nos hace falta
    }
    return p;
  });
}

/* Creamos la lista ya normalizada */
const preguntasNormalizadas = normalizarPreguntas(preguntasBase);
/* ──────────────────────────────── */



let preguntas = [];

function iniciarSesion() {
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();

  if (nombre === "" || correo === "") {
    alert("Por favor ingresa tu nombre y correo.");
    return;
  }

  // Ocultar login y mostrar simulador
  document.getElementById("login-container").style.display = "none";
  document.getElementById("simulador-container").style.display = "block";

  // Iniciar simulación directamente
  iniciarSimulacion();
}

function iniciarSimulacion() {
  preguntas = preguntasNormalizadas.sort(() => 0.5 - Math.random()).slice(0, 20);
  const container = document.getElementById('preguntas-container');
  const resultado = document.getElementById('resultado');
  const boton = document.getElementById('boton-enviar');
  const botonReintentar = document.getElementById('boton-reintentar');

  container.innerHTML = '';
  resultado.innerHTML = '';
  boton.style.display = 'inline';
  botonReintentar.style.display = 'none';

  preguntas.forEach((p, index) => {
    const div = document.createElement('div');
    div.className = "bloque-pregunta";
    div.innerHTML = `
      <p><strong>${index + 1}. ${p.pregunta}</strong></p>
      ${Object.entries(p.opciones).map(([key, val]) =>
        `<label><input type="radio" name="preg${index}" value="${key}"> ${key}: ${val}</label><br>`
      ).join('')}
      <div class="feedback" id="feedback-${index}"></div>
      <hr>`;
    container.appendChild(div);
  });
}

function corregir() {
  let correctas = 0;

  preguntas.forEach((p, i) => {
    const radios = document.getElementsByName(`preg${i}`);
    const seleccionada = Array.from(radios).find(r => r.checked);
    const feedback = document.getElementById(`feedback-${i}`);

    // Desactivar selección
    radios.forEach(r => r.disabled = true);

    if (seleccionada) {
      if (seleccionada.value === p.correcta) {
        correctas++;
        feedback.innerHTML = `<span style="color:green">✔ Respuesta correcta</span>`;
      } else {
        feedback.innerHTML = `<span style="color:red">✘ Respuesta incorrecta</span><br><small>La correcta era: ${p.correcta}: ${p.opciones[p.correcta]}</small>`;
      }
    } else {
      feedback.innerHTML = `<span style="color:red">✘ Sin responder</span><br><small>La correcta era: ${p.correcta}: ${p.opciones[p.correcta]}</small>`;
    }
  });

  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `
    <h2>Resultado</h2>
    <p>Correctas: ${correctas} / ${preguntas.length}</p>
    <p>Calificación: ${((correctas / preguntas.length) * 100).toFixed(1)}%</p>
  `;

  document.getElementById('boton-enviar').style.display = 'none';
  document.getElementById('boton-reintentar').style.display = 'inline';
}

iniciarSimulacion();
