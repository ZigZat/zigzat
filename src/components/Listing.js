import React, { useState } from 'react';
import './styles/listing.css';
import CarsAndBakkies from './listingFormsProps/CarsAndBakkies'
import Accessories from './listingFormsProps/Accessories'
import ApartmentFlat from './listingFormsProps/ApartmentFlat'
import BoatsAviation from './listingFormsProps/BoatsAviation'
import Cameras from './listingFormsProps/Cameras'
import CaravansTrailers from './listingFormsProps/CaravansTrailers'
import CarPartsAccessories from './listingFormsProps/CarPartsAccessories'
import CellPhones from './listingFormsProps/CellPhones'
import ClothingAccessories from './listingFormsProps/ClothingAccessories'
import ClothingShoes from './listingFormsProps/ClothingShoes'
import CommercialProperty from './listingFormsProps/CommercialProperty'
import ComputersLaptops from './listingFormsProps/ComputersLaptops'
import GamingConsoles from './listingFormsProps/GamingConsoles'
import HealthBeautyCosmetics from './listingFormsProps/HealthBeautyCosmetics'
import HomeSecurity from './listingFormsProps/HomeSecurity'
import House from './listingFormsProps/House'
import JewelleryAccessories from './listingFormsProps/JewelleryAccessories'
import MotorCyclesScooters from './listingFormsProps/MotorCyclesScooters'
import PramsCotsEquipment from './listingFormsProps/PramsCotsEquipment'
import ToolsWorkshopEquipment from './listingFormsProps/ToolsWorkshopEquipment'
import Townhouse from './listingFormsProps/Townhouse'
import TrucksCommercialVehicles from './listingFormsProps/TrucksCommercialVehicles'
import TvAudioVisual from './listingFormsProps/TvAudioVisual'
import VacantLandPlot from './listingFormsProps/VacantLandPlot'






function Listing(props) {

  /*Catagories states**** ------------------------------------------------------------------****** */


  const [vehiclesForm, setVehiclesForm] = useState(false);
  const [electronicsForm, setElectronicsForm] = useState(false);
  const [fashionForm, setFashionForm] = useState(false);
  const [propertyForm, setPropertyForm] = useState(false);
  const [childrenForm, setChildrenForm] = useState(false);
  const [homeGardenForm, setHomeGardenForm] = useState(false);


  const vehicleclick = () => {
    setVehiclesForm(!vehiclesForm);
  }

  const electronicsclick = () => {
    setElectronicsForm(!electronicsForm);
  }

  const fashionclick = () => {
    setFashionForm(!fashionForm);
  }

  const propertyclick = () => {
    setPropertyForm(!propertyForm);
  }

  const childrenclick = () => {
    setChildrenForm(!childrenForm);
  }

  const homegardenclick = () => {
    setHomeGardenForm(!homeGardenForm)
  }

  const closeVehicles = () => setVehiclesForm(false);
  const closeElectronics = () => setElectronicsForm(false);
  const closeFashion = () => setFashionForm(false);
  const closeProperty = () => setPropertyForm(false);
  const closeChildren = () => setChildrenForm(false);
  const closeHomeGarden = () => setHomeGardenForm(false);
  

 
 
 
  /*Sub Catagories***------------------------------------------------------------------ *******states */






  /*Vehicles  ------------------------------------------------------------------ Catagories */

  const [carsAndBakkiesForm, setCarsAndBakkiesForm] = useState(false);

  const carsandbakkiesclick = () => {
    setCarsAndBakkiesForm(!carsAndBakkiesForm)
  }

  const [carPartsAccessoriesForm, setCarPartsAccessoriesForm] = useState(false);

  const carpartsaccessoriesclick = () => {
    setCarPartsAccessoriesForm(!carPartsAccessoriesForm)
  }
  
  const [motorcyclesScootersForm, setMotorcyclesScootersForm] = useState(false);

  const motorcyclesscootersclick = () => {
    setMotorcyclesScootersForm(!motorcyclesScootersForm)
  }

  const [trucksCommercialVehiclesForm, setTrucksCommercialVehicles] = useState(false);

  const truckscommercialvehiclesclick = () => {
    setTrucksCommercialVehicles(!trucksCommercialVehiclesForm)
  }

  const [caravansTrailersForm, setCaravansTrailers] = useState(false);

  const caravanstrailersclick = () => {
    setCaravansTrailers(!caravansTrailersForm)
  }

  const [boatsAviationForm, setBoatsAviation] = useState(false);

  const boatsaviationclick = () => {
    setBoatsAviation(!boatsAviationForm)
  }




  /*Eletronics  ------------------------------------------------------------------ Catagories */

  const [cellPhonesForm, setCellPhones] = useState(false);

  const cellphonesclick = () => {
    setCellPhones(!cellPhonesForm)
  }

  const [tvAudioVisualForm, setTvAudioVisual] = useState(false);

  const tvaudiovisualclick = () => {
    setTvAudioVisual(!tvAudioVisualForm)
  }

  const [computersLaptopsForm, setComputersLaptops] = useState(false);

  const computerslaptopsclick = () => {
    setComputersLaptops(!computersLaptopsForm)
  }

  const [gamingConsolesForm, setGamingConsoles] = useState(false);

  const gamingconsolesclick = () => {
    setGamingConsoles(!gamingConsolesForm)
  }

  const [camerasForm, setCameras] = useState(false);

  const camerasclick = () => {
    setCameras(!camerasForm)
  }

  const [accessoriesForm, setAccessories] = useState(false);

  const accessoriesclick = () => {
    setAccessories(!accessoriesForm)
  }

  /* FASHION  ------------------------------------------------------------------ CATAGORY */


 const [clothingShoesForm, setClothingShoes] = useState(false);

  const clothingshoesclick = () => {
    setClothingShoes(!clothingShoesForm)
  }

  const [jewelleryAccessoriesForm, setJewelleryAccessories] = useState(false);

  const jewelleryaccessoriesclick = () => {
    setJewelleryAccessories(!jewelleryAccessoriesForm)
  }

  const [ healthBeautyCosmeticsForm , setHealthBeautyCosmetics] = useState(false);

  const healthbeautycosmeticsclick = () => {
    setHealthBeautyCosmetics(!healthBeautyCosmeticsForm)
  }

  /*PROPERTY  ------------------------------------------------------------------ CATAGORY */

  const [houseForm, setHouse] = useState(false);

  const houseclick = () => {
    setHouse(!houseForm)
  }

  const [apartmentFlatForm, setApartmentFlat] = useState(false);

  const apartmentflatclick = () => {
    setApartmentFlat(!apartmentFlatForm)
  }

  const [townhouseForm, setTownhouse] = useState(false);

  const townhouseclick = () => {
    setTownhouse(!townhouseForm)
  }

  const [vacantLandPlotForm, setVacantLandPlot] = useState(false);

  const vacantlandplotclick = () => {
    setVacantLandPlot(!vacantLandPlotForm)
  }

  const [commercialPropertyForm, setCommercialProperty] = useState(false);

  const commercialpropertyclick = () => {
    setCommercialProperty(!commercialPropertyForm)
  }

  /*CHILDREN ------------------------------------------------------------------ CATAGORY */

  const [pramsCotsEquipmentForm, setPramsCotsEquipment] = useState(false);

  const pramscotsequipmentclick = () => {
    setPramsCotsEquipment(!pramsCotsEquipmentForm)
  }

  const [clothingAccessoriesForm, setClothingAccessories] = useState(false);

  const clothingaccessoriesclick = () => {
    setClothingAccessories(!clothingAccessoriesForm)
  }

  /* HOME & GARDEN  ------------------------------------------------------------------ CATAGORY*/

  const [homeSecurityForm, setHomeSecurityForm] = useState(false);

  const homesecurityclick = () => {
    setHomeSecurityForm(!homeSecurityForm)
  }

  const [toolsWorkshopEquipmentForm, setToolsWorkshopEquipmentForm] = useState(false);

  const toolsworkshopequipmentclick = () => {
    setToolsWorkshopEquipmentForm(!toolsWorkshopEquipmentForm)
  }


  /* close sub catagories --------------------------------------------------------------------------------------- */

  const closeAccessories = () => setAccessories(false);
  const closeApartmentFlat = () => setApartmentFlat(false);
  const closeBoatsAviation = () => setBoatsAviation(false);
  const closeCameras = () => setCameras(false);
  const closeCaravansTrailers = () => setCaravansTrailers(false);
  const closeCarPartsAccessories = () => setCarPartsAccessoriesForm(false); 
  const closeCarAndBakkies = () => setCarsAndBakkiesForm(false);
  const closeCellPhones = () => setCellPhones(false);
  const closeClothingAccessories = () => setClothingAccessories(false);
  const closeClothingShoes = () => setClothingShoes(false); 
  const closeCommercialProperty = () => setCommercialProperty(false);
  const closeComputerLaptop = () => setComputersLaptops(false);
  const closeGamingConsoles = () => setGamingConsoles(false);
  const closeHealthBeautyCosmetics = () => setHealthBeautyCosmetics(false);
  const closeHomeSecurity = () => setHomeSecurityForm(false);
  const closeHouse = () => setHouse(false);
  const closeJewelleryAccessories = () => setJewelleryAccessories(false);
  const closeMotorCyclesScooters = () => setMotorcyclesScootersForm(false);
  const closePramsCotsEquipment = () => setPramsCotsEquipment(false);
  const closeToolsWorkshopEquipment = () => setToolsWorkshopEquipmentForm(false);
  const closeTownhouse = () => setTownhouse(false);
  const closeTruckCommercialVehicles = () => setTrucksCommercialVehicles(false);
  const closeTvAudioVisual = () => setTvAudioVisual(false);
  const closeVacantLandPlot = () => setVacantLandPlot(false);
    
  



  return (
    <div>

        <h1 className="listing__title">Create Your Listing</h1>
        <h3 className="select__catagory">Select a Catagory</h3>

        <div className="form__buttons">
        <button className="form__button" onClick={() => {
          vehicleclick();
          closeElectronics();
          closeFashion();
          closeProperty();
          closeChildren();
          closeHomeGarden();
        }}>Vehicles<i class="fas fa-car" id="list__icons"></i></button>


        <button className="form__button" onClick={() => {
          closeVehicles();
          electronicsclick();
          closeFashion();
          closeProperty();
          closeChildren();
          closeHomeGarden();
        }}>Electronics<i class="fas fa-phone-laptop" id="list__icons"></i></button>


        <button className="form__button" onClick={() => {
          closeVehicles();
          closeElectronics();
          fashionclick();
          closeProperty();
          closeChildren();
          closeHomeGarden();
        }}>Fashion<i class="fas fa-tshirt" id="list__icons"></i></button>

        <button className="form__button" onClick={() => {
          closeVehicles();
          closeElectronics();
          closeFashion();
          propertyclick();
          closeChildren();
          closeHomeGarden();
        }}>Property <i class="fas fa-home" id="list__icons"></i></button>


        <button className="form__button" onClick={() => {
          closeVehicles();
          closeElectronics();
          closeFashion();
          closeProperty();
          childrenclick();
          closeHomeGarden();
        }}>Children<i class="fas fa-baby" id="list__icons"></i></button>

<button className="form__button" onClick={() => {
          closeVehicles();
          closeElectronics();
          closeFashion();
          closeProperty();
          homegardenclick();
          closeChildren();
        }}>Home & Garden<i class="fas fa-tools"></i></button>

        </div>


      
        <h3 class="select__catagory">Select a Sub Catagory</h3>
        
        
     {vehiclesForm && (
       <div>
         <button className="form__button" onClick={() => {
         carsandbakkiesclick();
         closeAccessories();
         closeApartmentFlat();
         closeBoatsAviation();
         closeCameras();
         closeCaravansTrailers();
         closeCarPartsAccessories();
         closeCellPhones();
         closeClothingAccessories();
         closeClothingShoes();
         closeCommercialProperty();
         closeComputerLaptop();
         closeGamingConsoles();
         closeHealthBeautyCosmetics();
         closeHomeSecurity();
         closeHouse();
         closeJewelleryAccessories();
         closeMotorCyclesScooters();
         closePramsCotsEquipment();
         closeToolsWorkshopEquipment();
         closeTownhouse();
         closeTruckCommercialVehicles();
         closeTvAudioVisual();
         closeVacantLandPlot();
        }}>Cars & Bakkies</button>

          <button className="form__button" onClick={() => {
         closeCarAndBakkies();
         closeAccessories();
         closeApartmentFlat();
         closeBoatsAviation();
         closeCameras();
         closeCaravansTrailers();
         carpartsaccessoriesclick();
         closeCellPhones();
         closeClothingAccessories();
         closeClothingShoes();
         closeCommercialProperty();
         closeComputerLaptop();
         closeGamingConsoles();
         closeHealthBeautyCosmetics();
         closeHomeSecurity();
         closeHouse();
         closeJewelleryAccessories();
         closeMotorCyclesScooters();
         closePramsCotsEquipment();
         closeToolsWorkshopEquipment();
         closeTownhouse();
         closeTruckCommercialVehicles();
         closeTvAudioVisual();
         closeVacantLandPlot();
        }}> Car Parts & Accessories</button>




          <button className="form__button" onClick={() => {
         closeCarAndBakkies();
         closeAccessories();
         closeApartmentFlat();
         closeBoatsAviation();
         closeCameras();
         closeCaravansTrailers();
         closeCarPartsAccessories();
         closeCellPhones();
         closeClothingAccessories();
         closeClothingShoes();
         closeCommercialProperty();
         closeComputerLaptop();
         closeGamingConsoles();
         closeHealthBeautyCosmetics();
         closeHomeSecurity();
         closeHouse();
         closeJewelleryAccessories();
         motorcyclesscootersclick();
         closePramsCotsEquipment();
         closeToolsWorkshopEquipment();
         closeTownhouse();
         closeTruckCommercialVehicles();
         closeTvAudioVisual();
         closeVacantLandPlot();
        }}>Motorcycles & Scooters</button>





          <button className="form__button" onClick={() => {
         closeCarAndBakkies();
         closeAccessories();
         closeApartmentFlat();
         closeBoatsAviation();
         closeCameras();
         closeCaravansTrailers();
         closeCarPartsAccessories();
         closeCellPhones();
         closeClothingAccessories();
         closeClothingShoes();
         closeCommercialProperty();
         closeComputerLaptop();
         closeGamingConsoles();
         closeHealthBeautyCosmetics();
         closeHomeSecurity();
         closeHouse();
         closeJewelleryAccessories();
         closeMotorCyclesScooters();
         closePramsCotsEquipment();
         closeToolsWorkshopEquipment();
         closeTownhouse();
         truckscommercialvehiclesclick();
         closeTvAudioVisual();
         closeVacantLandPlot();
        }}>Trucks & Commercial Vehicles</button>





          <button className="form__button" onClick={() => {
         closeCarAndBakkies();
         closeAccessories();
         closeApartmentFlat();
         closeBoatsAviation();
         closeCameras();
         caravanstrailersclick();
         closeCarPartsAccessories();
         closeCellPhones();
         closeClothingAccessories();
         closeClothingShoes();
         closeCommercialProperty();
         closeComputerLaptop();
         closeGamingConsoles();
         closeHealthBeautyCosmetics();
         closeHomeSecurity();
         closeHouse();
         closeJewelleryAccessories();
         closeMotorCyclesScooters();
         closePramsCotsEquipment();
         closeToolsWorkshopEquipment();
         closeTownhouse();
         closeTruckCommercialVehicles();
         closeTvAudioVisual();
         closeVacantLandPlot();
        }}>Caravans & Trailers</button>



        
          
          <button className="form__button" onClick={() => {
         closeCarAndBakkies();
         closeAccessories();
         closeApartmentFlat();
         boatsaviationclick();
         closeCameras();
         closeCaravansTrailers();
         closeCarPartsAccessories();
         closeCellPhones();
         closeClothingAccessories();
         closeClothingShoes();
         closeCommercialProperty();
         closeComputerLaptop();
         closeGamingConsoles();
         closeHealthBeautyCosmetics();
         closeHomeSecurity();
         closeHouse();
         closeJewelleryAccessories();
         closeMotorCyclesScooters();
         closePramsCotsEquipment();
         closeToolsWorkshopEquipment();
         closeTownhouse();
         closeTruckCommercialVehicles();
         closeTvAudioVisual();
         closeVacantLandPlot();
        }}>Boats & Aviation</button>


       </div>
      )}

   {electronicsForm && (
        <div>
          <button className="form__button" onClick={() => {
         closeCarAndBakkies();
         closeAccessories();
         closeApartmentFlat();
         closeBoatsAviation();
         closeCameras();
         closeCaravansTrailers();
         closeCarPartsAccessories();
         cellphonesclick();
         closeClothingAccessories();
         closeClothingShoes();
         closeCommercialProperty();
         closeComputerLaptop();
         closeGamingConsoles();
         closeHealthBeautyCosmetics();
         closeHomeSecurity();
         closeHouse();
         closeJewelleryAccessories();
         closeMotorCyclesScooters();
         closePramsCotsEquipment();
         closeToolsWorkshopEquipment();
         closeTownhouse();
         closeTruckCommercialVehicles();
         closeTvAudioVisual();
         closeVacantLandPlot();
        }}>Cell Phones</button>



          <button className="form__button" onClick={() => {
        closeCarAndBakkies();
         closeAccessories();
         closeApartmentFlat();
         closeBoatsAviation();
         closeCameras();
         closeCaravansTrailers();
         closeCarPartsAccessories();
         closeCellPhones();
         closeClothingAccessories();
         closeClothingShoes();
         closeCommercialProperty();
         closeComputerLaptop();
         closeGamingConsoles();
         closeHealthBeautyCosmetics();
         closeHomeSecurity();
         closeHouse();
         closeJewelleryAccessories();
         closeMotorCyclesScooters();
         closePramsCotsEquipment();
         closeToolsWorkshopEquipment();
         closeTownhouse();
         closeTruckCommercialVehicles();
         tvaudiovisualclick();
         closeVacantLandPlot();
        }}>TV, Audio & Visual</button>





          <button className="form__button" onClick={() => {
         closeCarAndBakkies();
         closeAccessories();
         closeApartmentFlat();
         closeBoatsAviation();
         closeCameras();
         closeCaravansTrailers();
         closeCarPartsAccessories();
         closeCellPhones();
         closeClothingAccessories();
         closeClothingShoes();
         closeCommercialProperty();
         computerslaptopsclick();
         closeGamingConsoles();
         closeHealthBeautyCosmetics();
         closeHomeSecurity();
         closeHouse();
         closeJewelleryAccessories();
         closeMotorCyclesScooters();
         closePramsCotsEquipment();
         closeToolsWorkshopEquipment();
         closeTownhouse();
         closeTruckCommercialVehicles();
         closeTvAudioVisual();
         closeVacantLandPlot();
        }}>Computers & Laptops</button>




          <button className="form__button" onClick={() => {
         closeCarAndBakkies();
         closeAccessories();
         closeApartmentFlat();
         closeBoatsAviation();
         closeCameras();
         closeCaravansTrailers();
         closeCarPartsAccessories();
         closeCellPhones();
         closeClothingAccessories();
         closeClothingShoes();
         closeCommercialProperty();
         closeComputerLaptop();
         gamingconsolesclick();
         closeHealthBeautyCosmetics();
         closeHomeSecurity();
         closeHouse();
         closeJewelleryAccessories();
         closeMotorCyclesScooters();
         closePramsCotsEquipment();
         closeToolsWorkshopEquipment();
         closeTownhouse();
         closeTruckCommercialVehicles();
         closeTvAudioVisual();
         closeVacantLandPlot();
        }}>Gaming & Consoles</button>



          <button className="form__button" onClick={() => {
         closeCarAndBakkies();
         closeAccessories();
         closeApartmentFlat();
         closeBoatsAviation();
         camerasclick();
         closeCaravansTrailers();
         closeCarPartsAccessories();
         closeCellPhones();
         closeClothingAccessories();
         closeClothingShoes();
         closeCommercialProperty();
         closeComputerLaptop();
         closeGamingConsoles();
         closeHealthBeautyCosmetics();
         closeHomeSecurity();
         closeHouse();
         closeJewelleryAccessories();
         closeMotorCyclesScooters();
         closePramsCotsEquipment();
         closeToolsWorkshopEquipment();
         closeTownhouse();
         closeTruckCommercialVehicles();
         closeTvAudioVisual();
         closeVacantLandPlot();
        }}>Cameras</button>




          <button className="form__button" onClick={() => {
         closeCarAndBakkies();
         accessoriesclick();
         closeApartmentFlat();
         closeBoatsAviation();
         closeCameras();
         closeCaravansTrailers();
         closeCarPartsAccessories();
         closeCellPhones();
         closeClothingAccessories();
         closeClothingShoes();
         closeCommercialProperty();
         closeComputerLaptop();
         closeGamingConsoles();
         closeHealthBeautyCosmetics();
         closeHomeSecurity();
         closeHouse();
         closeJewelleryAccessories();
         closeMotorCyclesScooters();
         closePramsCotsEquipment();
         closeToolsWorkshopEquipment();
         closeTownhouse();
         closeTruckCommercialVehicles();
         closeTvAudioVisual();
         closeVacantLandPlot();
        }}>Accessories</button>
        </div>
      )}


{fashionForm && (
        <div>
          <button className="form__button" onClick={() => {
         closeCarAndBakkies();
         closeAccessories();
         closeApartmentFlat();
         closeBoatsAviation();
         closeCameras();
         closeCaravansTrailers();
         closeCarPartsAccessories();
         closeCellPhones();
         closeClothingAccessories();
         clothingshoesclick();
         closeCommercialProperty();
         closeComputerLaptop();
         closeGamingConsoles();
         closeHealthBeautyCosmetics();
         closeHomeSecurity();
         closeHouse();
         closeJewelleryAccessories();
         closeMotorCyclesScooters();
         closePramsCotsEquipment();
         closeToolsWorkshopEquipment();
         closeTownhouse();
         closeTruckCommercialVehicles();
         closeTvAudioVisual();
         closeVacantLandPlot();
        }}>Clothing & Shoes</button>

          <button className="form__button" onClick={() => {
         closeCarAndBakkies();
         closeAccessories();
         closeApartmentFlat();
         closeBoatsAviation();
         closeCameras();
         closeCaravansTrailers();
         closeCarPartsAccessories();
         closeCellPhones();
         closeClothingAccessories();
         closeClothingShoes();
         closeCommercialProperty();
         closeComputerLaptop();
         closeGamingConsoles();
         closeHealthBeautyCosmetics();
         closeHomeSecurity();
         closeHouse();
         jewelleryaccessoriesclick();
         closeMotorCyclesScooters();
         closePramsCotsEquipment();
         closeToolsWorkshopEquipment();
         closeTownhouse();
         closeTruckCommercialVehicles();
         closeTvAudioVisual();
         closeVacantLandPlot();
        }}>Jewellery & Accessories</button>



          
          <button className="form__button" onClick={() => {
         closeCarAndBakkies();
         closeAccessories();
         closeApartmentFlat();
         closeBoatsAviation();
         closeCameras();
         closeCaravansTrailers();
         closeCarPartsAccessories();
         closeCellPhones();
         closeClothingAccessories();
         closeClothingShoes();
         closeCommercialProperty();
         closeComputerLaptop();
         closeGamingConsoles();
         healthbeautycosmeticsclick();
         closeHomeSecurity();
         closeHouse();
         closeJewelleryAccessories();
         closeMotorCyclesScooters();
         closePramsCotsEquipment();
         closeToolsWorkshopEquipment();
         closeTownhouse();
         closeTruckCommercialVehicles();
         closeTvAudioVisual();
         closeVacantLandPlot();
        }}>Health, Beauty & Cosmetics</button>

        </div>
      )}




      {propertyForm && (
        <div>
          <button className="form__button" onClick={() => {
         closeCarAndBakkies();
         closeAccessories();
         closeApartmentFlat();
         closeBoatsAviation();
         closeCameras();
         closeCaravansTrailers();
         closeCarPartsAccessories();
         closeCellPhones();
         closeClothingAccessories();
         closeClothingShoes();
         closeCommercialProperty();
         closeComputerLaptop();
         closeGamingConsoles();
         closeHealthBeautyCosmetics();
         closeHomeSecurity();
         houseclick();
         closeJewelleryAccessories();
         closeMotorCyclesScooters();
         closePramsCotsEquipment();
         closeToolsWorkshopEquipment();
         closeTownhouse();
         closeTruckCommercialVehicles();
         closeTvAudioVisual();
         closeVacantLandPlot();
        }}>House</button>

            <button className="form__button" onClick={() => {
        closeCarAndBakkies();
         closeAccessories();
         apartmentflatclick();
         closeBoatsAviation();
         closeCameras();
         closeCaravansTrailers();
         closeCarPartsAccessories();
         closeCellPhones();
         closeClothingAccessories();
         closeClothingShoes();
         closeCommercialProperty();
         closeComputerLaptop();
         closeGamingConsoles();
         closeHealthBeautyCosmetics();
         closeHomeSecurity();
         closeHouse();
         closeJewelleryAccessories();
         closeMotorCyclesScooters();
         closePramsCotsEquipment();
         closeToolsWorkshopEquipment();
         closeTownhouse();
         closeTruckCommercialVehicles();
         closeTvAudioVisual();
         closeVacantLandPlot();
        }}>Apartment / Flat</button>



            <button className="form__button" onClick={() => {
         closeCarAndBakkies();
         closeAccessories();
         closeApartmentFlat();
         closeBoatsAviation();
         closeCameras();
         closeCaravansTrailers();
         closeCarPartsAccessories();
         closeCellPhones();
         closeClothingAccessories();
         closeClothingShoes();
         closeCommercialProperty();
         closeComputerLaptop();
         closeGamingConsoles();
         closeHealthBeautyCosmetics();
         closeHomeSecurity();
         closeHouse();
         closeJewelleryAccessories();
         closeMotorCyclesScooters();
         closePramsCotsEquipment();
         closeToolsWorkshopEquipment();
         townhouseclick();
         closeTruckCommercialVehicles();
         closeTvAudioVisual();
         closeVacantLandPlot();
        }}>Townhouse</button>

            <button className="form__button" onClick={() => {
         closeCarAndBakkies();
         closeAccessories();
         closeApartmentFlat();
         closeBoatsAviation();
         closeCameras();
         closeCaravansTrailers();
         closeCarPartsAccessories();
         closeCellPhones();
         closeClothingAccessories();
         closeClothingShoes();
         closeCommercialProperty();
         closeComputerLaptop();
         closeGamingConsoles();
         closeHealthBeautyCosmetics();
         closeHomeSecurity();
         closeHouse();
         closeJewelleryAccessories();
         closeMotorCyclesScooters();
         closePramsCotsEquipment();
         closeToolsWorkshopEquipment();
         closeTownhouse();
         closeTruckCommercialVehicles();
         closeTvAudioVisual();
         vacantlandplotclick();
        }}>Vacant Land / Plot</button>




            <button className="form__button" onClick={() => {
         closeCarAndBakkies();
         closeAccessories();
         closeApartmentFlat();
         closeBoatsAviation();
         closeCameras();
         closeCaravansTrailers();
         closeCarPartsAccessories();
         closeCellPhones();
         closeClothingAccessories();
         closeClothingShoes();
         commercialpropertyclick();
         closeComputerLaptop();
         closeGamingConsoles();
         closeHealthBeautyCosmetics();
         closeHomeSecurity();
         closeHouse();
         closeJewelleryAccessories();
         closeMotorCyclesScooters();
         closePramsCotsEquipment();
         closeToolsWorkshopEquipment();
         closeTownhouse();
         closeTruckCommercialVehicles();
         closeTvAudioVisual();
         closeVacantLandPlot();
        }}>Commercial Property</button>
        </div>
      )}


   {childrenForm && (
        <div>
            <button className="form__button" onClick={() => {
         closeCarAndBakkies();
         closeAccessories();
         closeApartmentFlat();
         closeBoatsAviation();
         closeCameras();
         closeCaravansTrailers();
         closeCarPartsAccessories();
         closeCellPhones();
         closeClothingAccessories();
         closeClothingShoes();
         closeCommercialProperty();
         closeComputerLaptop();
         closeGamingConsoles();
         closeHealthBeautyCosmetics();
         closeHomeSecurity();
         closeHouse();
         closeJewelleryAccessories();
         closeMotorCyclesScooters();
         pramscotsequipmentclick();
         closeToolsWorkshopEquipment();
         closeTownhouse();
         closeTruckCommercialVehicles();
         closeTvAudioVisual();
         closeVacantLandPlot();
        }}>Prams, Cots & Equipment</button>



            <button className="form__button" onClick={() => {
         closeCarAndBakkies();
         closeAccessories();
         closeApartmentFlat();
         closeBoatsAviation();
         closeCameras();
         closeCaravansTrailers();
         closeCarPartsAccessories();
         closeCellPhones();
         clothingaccessoriesclick();
         closeClothingShoes();
         closeCommercialProperty();
         closeComputerLaptop();
         closeGamingConsoles();
         closeHealthBeautyCosmetics();
         closeHomeSecurity();
         closeHouse();
         closeJewelleryAccessories();
         closeMotorCyclesScooters();
         closePramsCotsEquipment();
         closeToolsWorkshopEquipment();
         closeTownhouse();
         closeTruckCommercialVehicles();
         closeTvAudioVisual();
         closeVacantLandPlot();
        }}>Clothing & Accessories</button>

        </div>
      )}

    
{homeGardenForm && (
        <div>
            <button className="form__button" onClick={() => {
         closeCarAndBakkies();
         closeAccessories();
         closeApartmentFlat();
         closeBoatsAviation();
         closeCameras();
         closeCaravansTrailers();
         closeCarPartsAccessories();
         closeCellPhones();
         closeClothingAccessories();
         closeClothingShoes();
         closeCommercialProperty();
         closeComputerLaptop();
         closeGamingConsoles();
         closeHealthBeautyCosmetics();
         homesecurityclick();
         closeHouse();
         closeJewelleryAccessories();
         closeMotorCyclesScooters();
         closePramsCotsEquipment();
         closeToolsWorkshopEquipment();
         closeTownhouse();
         closeTruckCommercialVehicles();
         closeTvAudioVisual();
         closeVacantLandPlot();
        }}>Home & Security</button>

            <button className="form__button" onClick={() => {
         closeCarAndBakkies();
         closeAccessories();
         closeApartmentFlat();
         closeBoatsAviation();
         closeCameras();
         closeCaravansTrailers();
         closeCarPartsAccessories();
         closeCellPhones();
         closeClothingAccessories();
         closeClothingShoes();
         closeCommercialProperty();
         closeComputerLaptop();
         closeGamingConsoles();
         closeHealthBeautyCosmetics();
         closeHomeSecurity();
         closeHouse();
         closeJewelleryAccessories();
         closeMotorCyclesScooters();
         closePramsCotsEquipment();
         toolsworkshopequipmentclick();
         closeTownhouse();
         closeTruckCommercialVehicles();
         closeTvAudioVisual();
         closeVacantLandPlot();
        }}>Tools & Workshop Equipment</button>


        </div>
      )}



{/* vehicles ** ------------------------------------------------------------------** Catagory */}

{carsAndBakkiesForm && (
        <CarsAndBakkies />
      )}

{carPartsAccessoriesForm && (
        <CarPartsAccessories />
      )}

{motorcyclesScootersForm && (
        <MotorCyclesScooters />
      )}


{trucksCommercialVehiclesForm && (
        <TrucksCommercialVehicles />
      )}

{caravansTrailersForm && (
        <CaravansTrailers />
      )}      

{boatsAviationForm && (
        <BoatsAviation />
      )}





  {/*Electronics ** ------------------------------------------------------------------** Catagory */}  

  {cellPhonesForm && (
        <CellPhones />
      )}

{tvAudioVisualForm && (
        <TvAudioVisual />
      )}

{computersLaptopsForm && (
        <ComputersLaptops />
      )}

{gamingConsolesForm && (
        <GamingConsoles />
      )}

{camerasForm && (
        <Cameras />
      )}

{accessoriesForm && (
        <Accessories />
      )}


  {/*FASHION ** ------------------------------------------------------------------** CATAGORY */}  


    {clothingShoesForm && (
        <ClothingShoes />
      )}

    {jewelleryAccessoriesForm && (
            <JewelleryAccessories />
          )}

    {healthBeautyCosmeticsForm && (
            <HealthBeautyCosmetics />
          )}

    {/* PROPERTY ** ------------------------------------------------------------------** CATAGORY */}    

    {houseForm && (
        <House />
      )}

    {apartmentFlatForm && (
            <ApartmentFlat />
          )}

    {townhouseForm && (
            <Townhouse />
          )}


{vacantLandPlotForm && (
            <VacantLandPlot />
          )}


          {commercialPropertyForm && (
            <CommercialProperty />
          )}     

    


    {/*CHILDREN ** ------------------------------------------------------------------** CATAGORY */}      

    {pramsCotsEquipmentForm && (
            <PramsCotsEquipment />
          )}

    {clothingAccessoriesForm && (
            <ClothingAccessories />
          )}

    {/*HOME AND GARDEN ** ------------------------------------------------------------------** CATAGORY*/}   

       {homeSecurityForm && (
            <HomeSecurity />
          )}

    {toolsWorkshopEquipmentForm && (
            <ToolsWorkshopEquipment />
          )}
    
    </div>
  )
}

export default Listing