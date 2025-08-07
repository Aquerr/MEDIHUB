package pl.bartlomiejstepien.medihub.doctor.web.mapper;

import org.mapstruct.Mapper;
import pl.bartlomiejstepien.medihub.doctor.model.Doctor;
import pl.bartlomiejstepien.medihub.doctor.web.response.DoctorResponse;

@Mapper(componentModel = "spring")
public interface DoctorMapper
{
    DoctorResponse mapToResponse(Doctor doctor);
}
