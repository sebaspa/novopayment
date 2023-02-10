export const converObjectToArray = (objectToTransform: any) => {
  const objArray: any = [];
  Object.keys(objectToTransform).forEach((key: any) =>
    objArray.push({
      name: key,
      options: objectToTransform[key],
    })
  );
  return objArray;
};

export const getOptionName = (key: string | undefined) => {
  let optionName = "";
  switch (key) {
    case "card_list":
      optionName = "Lista de tarjetas";
      break;

      case "pays_transfer":
      optionName = "Transferencias y pagos";
      break;

      case "support":
      optionName = "Atención al cliente";
      break;

      case "enterprises":
      optionName = "Empresas";
      break;

      case "between_cards":
      optionName = "Entre tarjetas";
      break;

      case "banks":
      optionName = "Cuenta bancaria";
      break;

      case "credit_card":
      optionName = "Tarjetas de crédito";
      break;

      case "lock":
      optionName = "Bloqueos";
      break;

      case "change_pass":
      optionName = "Cambio de contraseña";
      break;

      case "visa":
      optionName = "Visa";
      break;
      
      case "master_card":
      optionName = "Master card";
      break;

    default:
      optionName = "Texto vacío";
      break;
  }

  return optionName;
};
