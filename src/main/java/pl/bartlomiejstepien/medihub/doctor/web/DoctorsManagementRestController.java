package pl.bartlomiejstepien.medihub.doctor.web;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.bartlomiejstepien.medihub.doctor.model.Doctor;

@RestController
@RequestMapping("/api/v1/doctors-management")
@AllArgsConstructor
public class DoctorsManagementRestController
{
    @GetMapping
    public ResponseEntity<Doctor> getDoctor(@PathVariable long id) {
        return ResponseEntity.ok(null);
    }
}
