package pl.bartlomiejstepien.medihub.doctor.web;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import pl.bartlomiejstepien.medihub.doctor.service.DoctorsService;
import pl.bartlomiejstepien.medihub.doctor.web.mapper.DoctorMapper;
import pl.bartlomiejstepien.medihub.doctor.web.response.DoctorResponse;
import pl.bartlomiejstepien.medihub.doctor.web.response.DoctorSearchResponse;

@RestController
@RequestMapping("/api/v1/doctors")
@AllArgsConstructor
public class DoctorsRestController
{
    private final DoctorsService doctorsService;
    private final DoctorMapper doctorMapper;

    @GetMapping("/{id}")
    public ResponseEntity<DoctorResponse> getDoctor(@PathVariable long id)
    {
        return ResponseEntity.ok(doctorMapper.mapToResponse(this.doctorsService.getDoctor(id)));
    }

    @GetMapping
    public ResponseEntity<DoctorSearchResponse> searchDoctors(@RequestParam(required = false, defaultValue = "") String nameOrSpecialization)
    {
        return ResponseEntity.ok(null);
    }
}
