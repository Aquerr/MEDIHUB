package pl.bartlomiejstepien.medihub.doctor.model;

import lombok.Data;

import java.util.List;

@Data
public class Doctor
{
    private Long id;
    private String firstName;
    private String lastName;
    private List<Specialization> specializations;
    private List<String> languages;
}
