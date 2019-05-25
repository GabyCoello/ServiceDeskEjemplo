package com.service.desk.edimca.controlador;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.service.desk.edimca.modelo.Incidencia;
import com.service.desk.edimca.repository.IncidenciaRepository;
import java.util.Date;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class IncidenciaControlador {

	@Autowired
	IncidenciaRepository repository;

	@GetMapping("/incidencia/lista")
	public List<Incidencia> getAllIncidencias() {
		System.out.println("Get all Incidencias...");

		List<Incidencia> incidencia = new ArrayList<>();
		repository.findAll().forEach(incidencia::add);

		return incidencia;
	}

	@PostMapping(value = "/incidencia/crear")
	public Incidencia postIncidencia(@RequestBody Incidencia incidencia) {

		Incidencia _customer = repository.save(new Incidencia(incidencia.getNombreempleado(), incidencia.getDescripcion(), incidencia.getPrioridad(), new Date()));
		return _customer;
	}


	@PutMapping("/incidencia/{id}")
	public ResponseEntity<Incidencia> updateIncidencia(@PathVariable("id") long id, @RequestBody Incidencia incidencia) {
		
		Optional<Incidencia> incidenciaData = repository.findById(id);

		if (incidenciaData.isPresent()) {
			Incidencia _incidencia = incidenciaData.get();
			_incidencia.setFechaoperacion(new Date());
                        _incidencia.setTecnico(incidencia.getTecnico());
			
			return new ResponseEntity<>(repository.save(_incidencia), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
    