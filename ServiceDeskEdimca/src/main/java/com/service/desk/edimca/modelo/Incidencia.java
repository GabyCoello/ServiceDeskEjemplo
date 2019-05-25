package com.service.desk.edimca.modelo;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "T_INCIDENCIA")
public class Incidencia implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "idincidencia")
    private long idincidencia;

    @Column(name = "nombreempleado")
    private String nombreempleado;

    @Column(name = "descripcion")
    private String descripcion;

    @Column(name = "prioridad")
    private String prioridad;

    @Column(name = "fechaincidente")
    private Date fechaincidente;

    @Column(name = "fechaoperacion")
    private Date fechaoperacion;

    @Column(name = "tecnico")
    private String tecnico;
    
    @Column (name="aprobado")
    private boolean aprobado;

    public Incidencia() {
    }

    public Incidencia(String nombreempleado, String descripcion, String prioridad, Date fechaincidente, Date fechaoperacion, String tecnico) {
        this.nombreempleado = nombreempleado;
        this.descripcion = descripcion;
        this.prioridad = prioridad;
        this.fechaincidente = fechaincidente;
        this.fechaoperacion = fechaoperacion;
        this.tecnico = tecnico;
    }

    public Incidencia(String nombreempleado, String descripcion, String prioridad, Date fechaincidente) {
        this.nombreempleado = nombreempleado;
        this.descripcion = descripcion;
        this.prioridad = prioridad;
        this.fechaincidente = fechaincidente;
    }
    
    public long getIdincidencia() {
        return idincidencia;
    }

    public void setIdincidencia(long idincidencia) {
        this.idincidencia = idincidencia;
    }

    public String getNombreempleado() {
        return nombreempleado;
    }

    public void setNombreempleado(String nombreempleado) {
        this.nombreempleado = nombreempleado;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getPrioridad() {
        return prioridad;
    }

    public void setPrioridad(String prioridad) {
        this.prioridad = prioridad;
    }

    public Date getFechaincidente() {
        return fechaincidente;
    }

    public void setFechaincidente(Date fechaincidente) {
        this.fechaincidente = fechaincidente;
    }

    public Date getFechaoperacion() {
        return fechaoperacion;
    }

    public void setFechaoperacion(Date fechaoperacion) {
        this.fechaoperacion = fechaoperacion;
    }

    public String getTecnico() {
        return tecnico;
    }

    public void setTecnico(String tecnico) {
        this.tecnico = tecnico;
    }

    public boolean isAprobado() {
        return aprobado;
    }

    public void setAprobado(boolean aprobado) {
        this.aprobado = aprobado;
    }
    
    

    @Override
    public String toString() {
        return "Incidencia [idincidencia=" + idincidencia + ", nombreempleado=" + nombreempleado + ", descripcion=" + descripcion + ", prioridad=" + prioridad + 
                ", fechaincidente=" + fechaincidente +", fechaoperacion=" + fechaoperacion +", tecnico=" + tecnico +"]";
    }
}
