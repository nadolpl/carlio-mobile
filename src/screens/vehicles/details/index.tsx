import { useVehicleDetails } from "screens/vehicles/details/useVehicleDetails";
import { DetailsScreenWrapper } from "components/templates/DetailsScreenWrapper";
import { useDetailsNavigation } from "hooks/useDetailsNavigation";
import DetailRow from "components/molecules/detailRow";
import VehiclePhoto from "screens/vehicles/details/components/VehiclePhoto";
import { getEnumValueByKey } from "utils/enum";
import { FuelType } from "models/enums/FuelType";
import { formatCapacity, formatMileage, formatPower } from "utils/number";
import HeaderSection from "components/templates/DetailsScreenWrapper/components/HeaderSection";
import SectionCard from "components/templates/DetailsScreenWrapper/components/SectionCard";

const VehicleDetailsScreen = () => {
  const { navigation, vehicle, handleEditVehicle, handleDeleteVehicle, confirmationModalProps } =
    useVehicleDetails();

  useDetailsNavigation({
    navigation,
    onEdit: handleEditVehicle,
    onDelete: handleDeleteVehicle,
  });

  if (!vehicle) return null;

  return (
    <DetailsScreenWrapper confirmationModalProps={confirmationModalProps}>
      <VehiclePhoto vehicle={vehicle} />

      <HeaderSection title={vehicle.name} subtitle={`${vehicle.brand} ${vehicle.model}`} />

      <SectionCard title="Technical Data">
        <DetailRow label="Mileage" value={formatMileage(vehicle.mileage)} isFirst />
        <DetailRow label="Fuel Type" value={getEnumValueByKey(FuelType, vehicle.fuelType)} />
        <DetailRow label="Power" value={formatPower(vehicle.power)} />
        <DetailRow label="Capacity" value={formatCapacity(vehicle.capacity)} />
        <DetailRow label="Production Year" value={vehicle.productionYear} isLast />
      </SectionCard>

      {(vehicle.registrationNumber || vehicle.vin) && (
        <SectionCard title="Identification">
          <DetailRow label="Registration Number" value={vehicle.registrationNumber} isFirst />
          <DetailRow label="VIN" value={vehicle.vin} isLast />
        </SectionCard>
      )}
    </DetailsScreenWrapper>
  );
};

export default VehicleDetailsScreen;
