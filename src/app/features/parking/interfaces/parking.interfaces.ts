export type VehicleType = 'carro' | 'moto';

export interface CheckInRequest {
  vehicle_plate: string;
  vehicle_type: VehicleType;
}
export interface CheckOutRequest {
  vehicle_plate: string;
}

export interface ParkingRecord {
  parking_id: number;
  vehicle_id?: number;
  vehicle_plate?: string;
  vehicle_type?: VehicleType;
  parking_entry_time?: string;
  parking_exit_time?: string | null;
  parking_total_minutes?: number | null;
  parking_total_amount?: number | string | null;
  parking_amount?: number | string | null;
  parking_status?: VehicleType;
}

export interface ApiResponse<T> {
  message: string;
  data: T;
}
